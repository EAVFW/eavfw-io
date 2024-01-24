import fs from "fs/promises";
import path from "path";
import { cwd } from "process";
import { getTopicsAsync } from ".";
import { loadFront } from "yaml-front-matter";
import { Post } from "./Post";


export async function getArticlesAsync(categorySlug: string, topicSlug: string) {

    
    const topics = await getTopicsAsync(categorySlug);
    const topic = topics.find(x => x.topic === topicSlug)!;
    const folder = topic.path;//.resolve(cwd(), `./docs/${category}/${topic?.order}-${topic?.topic}`);
    const entries = await fs.readdir(folder);
    const folders = await Promise.all(entries.map(async (entry) => {

        let filePath = path.join(folder, entry);
        let stat = await fs.stat(filePath);

        return [filePath, stat] as [string, typeof stat];


    }));

    return await Promise.all(folders.filter(([_, stat]) => !stat.isDirectory())
        .map(async ([filepath]) => {
            const filename = path.parse(filepath).name;

            const contentBuffer = await fs.readFile(filepath);
            const content = new TextDecoder('utf-8', { ignoreBOM: false }).decode(contentBuffer);

            let parsed = loadFront(content) as Post;

            return {
                article: filename.substring(filename.indexOf('-') + 1),
                order: filename.substring(0, filename.indexOf('-')),
                path: filepath,
                ... parsed
            }
        }));


}

 