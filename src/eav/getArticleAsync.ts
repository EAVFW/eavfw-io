import fs from "fs/promises";
import { loadFront } from 'yaml-front-matter';
import Str from '@supercharge/strings';
import { getTopicsAsync } from "./getTopicsAsync";
import { getArticlesAsync } from "./getArticlesAsync";
import { getCategoriesAsync } from "./getCategoriesAsync";
import { Post } from "./Post";



export async function getArticleAsync(categoryid: string, topicid: string, articleid: string) {
    const categories = await getCategoriesAsync();
    const category = categories.find(x => x.category === categoryid)!;
    const topics = await getTopicsAsync(category.category);
    const topic = topics.find(x => x.topic === topicid)!;
    const articles = await getArticlesAsync(category.category, topic.topic);
    const article = articles.find(x => x.article === articleid)!;
    const contentBuffer = await fs.readFile(article.path);
    const content = new TextDecoder('utf-8', { ignoreBOM: false }).decode(contentBuffer);
    console.log(content);
    let parsed = loadFront(content) as Post;


    return {
        ...parsed,
        url: `/docs/${categoryid}/${topicid}/${articleid}`,
        readingTime: Math.ceil(Str(parsed.__content).words().length / 180)
    };
}
