import { setStaticParamsLocale } from "../../../locales/server";


export default function DocsLayout({ children, params }: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>)  {

     
    

    return <>{children}</>
}