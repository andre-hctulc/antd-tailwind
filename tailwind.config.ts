import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css,scss,html}"],
    theme: {
        extend: {},
        // Define antd colors as tailwindcss colors
        colors: {
            // neutral
            black: "var(--ant-color-gray-13)",
            white: "var(--ant-color-gray-1)",

            // theme
            primary: "var(--ant-color-primary)",

            // general
            divider: "var(--ant-color-border)",

            // background
            bg: "var(--ant-color-bg-base)",
            "bg-layout": "var(--ant-color-bg-layout)",
            "bg-container": "var(--ant-color-bg-container)",

            // text
            text: "var(--ant-color-text)",
            "text-base": "var(--ant-color-text-base)",
            "text-container": "var(--ant-color-bg-container)",
            "text-disabled": "var(--ant-color-bg-disabled)",
            "text-description": "var(--ant-color-bg-description)",

            // gray
            "gray-1": "var(--ant-color-gray-1)",
            "gray-2": "var(--ant-color-gray-2)",
            "gray-3": "var(--ant-color-gray-3)",
            "gray-4": "var(--ant-color-gray-4)",
            "gray-5": "var(--ant-color-gray-5)",
            "gray-6": "var(--ant-color-gray-6)",
            "gray-7": "var(--ant-color-gray-7)",
            "gray-8": "var(--ant-color-gray-8)",
            "gray-9": "var(--ant-color-gray-9)",
            "gray-10": "var(--ant-color-gray-10)",
            "gray-11": "var(--ant-color-gray-11)",
            "gray-12": "var(--ant-color-gray-12)",
            "gray-13": "var(--ant-color-gray-13)",
        },
    },
    plugins: [],
    corePlugins: {
        // disable preflight to avoid conflicts with antd styles
        preflight: false,
    },
};
export default config;
