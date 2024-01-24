
import { getCategoriesAsync } from "@/eav";
import { docsStyle } from "./docs.stylex"; 
import stylex from "@stylexjs/stylex"
import Link from "next/link";
import { getCurrentLocale, setStaticParamsLocale } from "../../../locales/server";


export default async function DocsWelcomePage({ params }: { params: { locale: string } }) {

  

    const cats = await getCategoriesAsync();

    return <div {...stylex.props(docsStyle.welcome)}>
        Welcome to EAVFW Docs
        <ul>
            {cats.map(cat => <li key={cat.order}><Link href={`/${params.locale}/docs/${cat.category}`}>{cat.category}</Link></li>)}
        </ul>
    </div>
}