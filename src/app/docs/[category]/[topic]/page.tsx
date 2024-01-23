import { getCategoriesAsync } from "@/eav"
import { getTopicsAsync } from "../../../../eav/getTopicsAsync";
import { getArticlesAsync } from "@/eav/getArticlesAsync";
import { docsStyle } from "../../docs.stylex";
import stylex from "@stylexjs/stylex";
import Link from "next/link";





export default async function TopicPage({ params }: { params: { category: string, topic: string } }) {

    console.log(params);
    const articles = await getArticlesAsync(params.category, params.topic);

    return <div {...stylex.props(docsStyle.welcome)}>
        <div>{JSON.stringify(params)}</div>
        <ul>
            {articles.map(cat => <li key={cat.article}><Link href={`/docs/${params.category}/${params.topic}/${cat.article}`}>{cat.article}</Link></li>)}
        </ul>
    </div>


    return <div>{JSON.stringify(params)}</div>
}
