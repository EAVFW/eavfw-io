
import { getCategoriesAsync } from "@/eav";
import { docsStyle } from "./docs.stylex"; 
import stylex from "@stylexjs/stylex"
import Link from "next/link";


export default async function DocsWelcomePage() {

    const cats = await getCategoriesAsync();

    return <div {...stylex.props(docsStyle.welcome)}>
        Welcome to EAVFW Docs
        <ul>
            {cats.map(cat => <li key={cat.order}><Link href={`/docs/${cat.category}`}>{cat.category}</Link></li>)}
        </ul>
    </div>
}