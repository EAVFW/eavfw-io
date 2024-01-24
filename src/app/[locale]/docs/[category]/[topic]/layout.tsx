import { getCategoriesAsync, getTopicsAsync } from "@/eav";
import { setStaticParamsLocale } from "../../../../../locales/server";



export async function generateStaticParams({ params, ...rest }: { params: { category: string } }) {
    //console.log("TopicPage", params);
    //console.log("TopicPage", rest);
    const slugs = await getTopicsAsync(params.category);
    return slugs.map(m => ({ category: params.category, topic: m.topic }));
}

export default function TopicLayout({ children, params }: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {

    

    return <>{children}</>
}