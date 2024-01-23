import { getCategoriesAsync } from "@/eav"
import stylex from "@stylexjs/stylex";
import { docsStyle } from "../docs.stylex";
import Link from "next/link";
import { getTopicsAsync } from "../../../eav/getTopicsAsync";


export default async function CategoryPage({ params }: { params: { category: string } }) {

    const topics = await getTopicsAsync(params.category);

    return <div {...stylex.props(docsStyle.welcome)}>
        <div>{JSON.stringify(params)}</div>
        <ul>
            {topics.map(cat => <li key={cat.topic}><Link href={`/docs/${params.category}/${cat.topic}`}>{cat.topic}</Link></li>)}
        </ul>
    </div>
}
