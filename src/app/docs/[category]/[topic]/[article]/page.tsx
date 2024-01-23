import { getArticlesAsync, getCategoriesAsync } from "@/eav"
import { getArticleAsync } from "../../../../../eav/getArticleAsync";
import { Suspense } from "react";
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function ArticlePage({ params }: { params: { category: string, topic: string, article: string } }) {

    const markdown = await getArticleAsync(params.category, params.topic, params.article);
    console.log(markdown);
    return (
        <Suspense fallback={<>Loading...</>}>
            <MDXRemote source={markdown.__content} />
        </Suspense>
    )
}

export async function generateStaticParams({ params }: { params: { category: string, topic: string } }) {
    const articles = await getArticlesAsync(params.category, params.topic);
    return articles.map(m => ({ category: params.category, topic: params.topic, article: m.article }));
}