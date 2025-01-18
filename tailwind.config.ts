import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "SC-Deep-Blue": "#082038",
        "SC-Light-Blue": "#109AB7",
        "SC-Orange": "#F7631B",
        "SC-Brand-Blue": "#0966AB",
      },
    },
  },
  plugins: [],
} satisfies Config;
