import type { Metadata } from "next";
import "./globals.css";

import "./github.css";
import stylex from "@stylexjs/stylex";
import { styles } from "@/stylex/global.stylex";

import { getCurrentLocale, getStaticParams, setStaticParamsLocale } from "@/locales/server";
import { boostrap } from "@eavfw/stylex-bootstrap";
import { RootStyles } from "@/stylex/layout.stylex";
import { Header } from "../../components/header/header";


export const metadata: Metadata = {
    title: "EAVFW - Business Application Framework",
    description: "Generate your next businsess application in 10mins",
};


export default function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {

    

    return (
        <html lang="en" {...stylex.props(styles.html)}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet" />

                <link rel="preload" href="https://docs.github.com/_next/static/css/298f0cf381eab452.css" as="style" />
                <link rel="stylesheet" href="https://docs.github.com/_next/static/css/298f0cf381eab452.css" data-n-g="" />
                <link rel="preload" href="https://docs.github.com/_next/static/css/fc4c99a85fcc078c.css" as="style" />
                <link rel="stylesheet" href="https://docs.github.com/_next/static/css/fc4c99a85fcc078c.css" data-n-p="" />
            </head>
            <body  {...stylex.props(styles.body)} >
                <Header />
                {children}
            </body>
        </html>
    );
}



export function generateStaticParams() {
    return getStaticParams()
}
