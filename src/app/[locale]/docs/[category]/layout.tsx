import { getCategoriesAsync } from "@/eav";
import { setStaticParamsLocale } from "../../../../locales/server";



export async function generateStaticParams({ params, ...rest }: { params: { category: string } }) {
    //console.log("categoryPage", params);
    //console.log("categoryPage", rest);
    const slugs = await getCategoriesAsync();
    return slugs.map(m => ({ category: m.category }));
}

export default function CategoryLayout({ children, params }: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {

    console.log(params.locale);
     

    return <>{children}</>
}