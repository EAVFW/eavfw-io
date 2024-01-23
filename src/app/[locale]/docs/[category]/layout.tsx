import { getCategoriesAsync } from "@/eav";



export async function generateStaticParams({ params, ...rest }: { params: { category: string } }) {
    console.log("categoryPage", params);
    console.log("categoryPage", rest);
    const slugs = await getCategoriesAsync();
    return slugs.map(m => ({ category: m.category }));
}

export default function CategoryLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    return <>{children}</>
}