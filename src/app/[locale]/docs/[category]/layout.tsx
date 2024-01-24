import { getCategoriesAsync, getCategoryAsync } from "@/eav";
import { setStaticParamsLocale } from "@/locales/server";
import { DocsNavHeader } from "@/components/nav/DocsNavHeader.server";
import { DocsNavTopics } from "@/components/nav/DocsNavTopic.server";



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

    const category = await getCategoryAsync(params.category);



    return (<div className="d-lg-flex">
        <div data-container="nav" className="position-sticky d-none border-right d-xxl-block" style={{ width: '326px', height: 'calc(100vh - 65px)', top: '65px' }} >
            <nav aria-labelledby="allproducts-menu">

                <DocsNavHeader backLinkTitle="Home" title={category.category} />

                <DocsNavTopics categoryId={params.category} />


            </nav>
        </div>
        <div className="flex-column flex-1 min-width-0">
            {children}
        </div>
       
    </div>)
}