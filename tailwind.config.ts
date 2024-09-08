import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css,scss,html}"],
    theme: {
        // Define antd colors as tailwindcss colors
        colors: {
            // neutral
            black: "black",
            white: "white",

            // theme
            primary: "var(--ant-color-primary)",
            success: "var(--ant-color-success)",
            warning: "var(--ant-color-warning)",
            error: "var(--ant-color-error)",
            info: "var(--ant-color-info)",

            // general
            divider: "var(--ant-color-border)",
            divider2: "var(--ant-color-border-secondary)",

            // background
            bg: "var(--ant-color-bg-base)",
            "bg-layout": "var(--ant-color-bg-layout)",
            "bg-container": "var(--ant-color-bg-container)",
            "bg-mask": "var(--ant-color-bg-mask)",
            "bg-blur": "var(--ant-color-bg-blur)",
            "bg-elevated": "var(--ant-color-bg-elevated)",

            // fill
            fill: "var(--ant-color-fill)",
            "fill-2": "var(--ant-color-fill-secondary)",
            "fill-3": "var(--ant-color-fill-tertiary)",
            "fill-4": "var(--ant-color-fill-quaternary)",

            // text
            "text": "var(--ant-color-text-base)",
            "text-heading": "var(--ant-color-text-heading)",
            "text-placeholder": "var(--ant-color-text-placeholder)",
            "text-label": "var(--ant-color-text-label)",
            "text-description": "var(--ant-color-bg-description)",
            "text-light-solid": "var(--ant-color-text-light-solid)",
            "text-secondary": "var(--ant-color-text-secondary)",
            "text-tertiary": "var(--ant-color-text-tertiary)",
            "text-quaternary": "var(--ant-color-text-quaternary)",

            // layout

            "header-bg": "var(--ant-layout-header-bg)",
            "slider-bg": "var(--ant-layout-slider-bg)",

            // constants
            blue: "var(--ant-blue)",
            cyan: "var(--ant-cyan)",
            purple: "var(--ant-purple)",
            green: "var(--ant-green)",
            magenta: "var(--ant-magenta)",
            pink: "var(--ant-pink)",
            red: "var(--ant-red)",
            orange: "var(--ant-orange)",
            yellow: "var(--ant-yellow)",
            volcano: "var(--ant-volcano)",
            geekblue: "var(--ant-geekblue)",
            gold: "var(--ant-gold)",
            lime: "var(--ant-lime)",
        },
    },
    plugins: [],
    corePlugins: {
        // disable preflight to avoid conflicts with antd styles
        preflight: false,
    },
};
export default config;
