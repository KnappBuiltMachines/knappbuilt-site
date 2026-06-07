import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Knapp-Built Stack brand palette (matched to the logo + builder app)
        amber: { DEFAULT: "#f5a623", dark: "#c8831a", light: "#ffc24d" },
        ink: {
          950: "#161616",
          900: "#1a1a1a",
          850: "#1e1e1e",
          800: "#242424",
          700: "#2a2a2a",
          600: "#333333",
          500: "#484848",
        },
        steel: "#9aa0a6",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-amber":
          "linear-gradient(rgba(245,166,35,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,166,35,.04) 1px,transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
