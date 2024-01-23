import type { Metadata } from "next";
import "./globals.css";


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
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet" />
            </head>
            <body >{children}</body>
        </html>
    );
}
