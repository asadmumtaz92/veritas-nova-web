import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1792px',
            '4xl': '2048px'
        },
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)"],
                crimson: ["var(--font-crimson)"],
            },
            colors: {
                "primary": "#1B3A4B",
                "bg": "#F3EFEA",
                "text": "#090909",
            },
        },
    },
    plugins: [],
} satisfies Config;
