import { getCategoriesAsync, getTopicsAsync } from "@/eav";



export async function generateStaticParams({ params, ...rest }: { params: { category: string } }) {
    console.log("TopicPage", params);
    console.log("TopicPage", rest);
    const slugs = await getTopicsAsync(params.category);
    return slugs.map(m => ({ category: params.category, topic: m.topic }));
}

export default function TopicLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    return <>{children}</>
}