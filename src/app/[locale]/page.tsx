import Image from "next/image";
import styles from "./page.module.css";
import { setStaticParamsLocale } from "@/locales/server";

import {boostrap } from "@eavfw/stylex-bootstrap";
import stylex from "@stylexjs/stylex";
import Link from "next/link";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/eavfw.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Next.js Logo"
                    width={400}
                    height={300}
                    priority
                />
            </div>

            <div className={styles.grid}>
                <Link
                    href={`/${locale}/docs/eavfw`}
                    className={styles.card}
                   
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about EAVFW features and API.</p>
                </Link>

                <Link
                    href={`/${locale}/docs/eavfw/getting-started/quickstart`}
                    className={styles.card}
                   
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </Link>

                <Link
                    href={`/${locale}/docs/eavfw/getting-started/samples`}
                    className={styles.card}
                   
                    rel="noopener noreferrer"
                >
                    <h2>
                        Samples <span>-&gt;</span>
                    </h2>
                    <p>Explore starter samples for EAVFW.</p>
                </Link>

                <Link
                    href={`/${locale}/docs/eavfw/getting-started/playground`}
                    className={styles.card}
                    
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your EAVFW site to a shareable URL with EAVFW Cloud.
                    </p>
                </Link>
            </div>
        </main>
  );
}
