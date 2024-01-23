import type { Metadata } from "next";
import "./globals.css";
import stylex from "@stylexjs/stylex";
import { styles } from "@/stylex/global.stylex";

import { getCurrentLocale, getStaticParams, setStaticParamsLocale } from "@/locales/server";


export const metadata: Metadata = {
    title: "EAVFW - Business Application Framework",
    description: "Generate your next businsess application in 10mins",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...stylex.props(styles.html)}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet" />
            </head>
            <body  {...stylex.props(styles.body)} >{children}</body>
        </html>
    );
}



export function generateStaticParams() {
    return getStaticParams()
}
