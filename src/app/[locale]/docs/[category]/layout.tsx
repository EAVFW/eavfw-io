import { getCategoriesAsync, getCategoryAsync } from "@/eav";
import { setStaticParamsLocale } from "@/locales/server";
import { DocsNavHeader } from "@/components/nav/DocsNavHeader.server";
import { DocsNavTopics } from "@/components/nav/DocsNavTopic.server";
import { DocsNav } from "../../../../components/nav/DocsNav.server";



export async function generateStaticParams({ params, ...rest }: { params: { category: string } }) {
    //console.log("categoryPage", params);
    //console.log("categoryPage", rest);
    const slugs = await getCategoriesAsync();
    return slugs.map(m => ({ category: m.category }));
}



export default async function CategoryLayout({ children, params }: Readonly<{
    children: React.ReactNode;
    params: { locale: string, category: string }
}>) {

    setStaticParamsLocale(params.locale);

   



    return (<div className="d-lg-flex">
        <DocsNav categoryid={params.category} />
        <div className="flex-column flex-1 min-width-0">
            {children}
        </div>
       
    </div>)
}