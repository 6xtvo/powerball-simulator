import { Metadata } from "./types";

import { assetPath } from "./utils";

/**
 * Alphabets for identifying ticket lines.
 */
export const alphabets: string[] = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("")
    .slice(0, 10);

/**
 * The default metadata for the site.
 */
export const metadata: Metadata = {
    url:
        process.env.NODE_ENV === "production"
            ? "https://xtncz.github.io/powerball-simulator/"
            : "http://localhost:3000/",
    "theme-color": "#ffffff",
    image: assetPath("/assets/XJY3ZrAQqf5zCq3kZb6obQUF1grJp6k6.png"),
    icon: assetPath("/assets/c7p3jjI2BFgGszRhVxRjtZdYDFeADlrt.png"),
    keywords: ["lotto", "lottery", "powerball", "simulator"]
};

/**
 * URL constants.
 */
export const urls = {
    article:
        "https://www.rnz.co.nz/news/in-depth/474134/lotto-stores-in-poorest-half-of-nz-account-for-70-percent-of-sales",
    license: "https://github.com/xtncz/powerball-simulator/blob/master/LICENSE",
    github: "https://github.com/xtncz/powerball-simulator",
    nextjs: "https://nextjs.org/",
    nodejs: "https://nodejs.org/",
    developer: "https://github.com/xtncz",
    sockt: "https://sockt.vercel.app/",
    matrix: "https://matrixdev.xyz/",
    lotto: "https://mylotto.co.nz/lotto/how-to-play"
};
