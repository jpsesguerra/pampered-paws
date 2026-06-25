import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          "on-pink": "var(--color-text-on-pink)",
        },
        brand: {
          "primary-pink": "var(--color-brand-primary-pink)",
          "secondary-light": "var(--color-brand-secondary-light)",
          "secondary-cream": "var(--color-brand-secondary-cream)",
          "deep-raspberry": "var(--color-brand-deep-raspberry)",
          "accent-gold": "var(--color-brand-accent-gold)",
          "accent-dark": "var(--color-brand-accent-dark)",
          "background-neutral": "var(--color-brand-background-neutral)",
          "neutral-dark": "var(--color-brand-neutral-dark)",
          "neutral-lighter": "var(--color-brand-neutral-lighter)",
        },
        surface: {
          white: "var(--color-surface-white)",
          "neutral-light": "var(--color-surface-neutral-light)",
        },
        link: {
          primary: "var(--color-link-primary)",
          alternate: "var(--color-link-alternate)",
        },
      },
      fontFamily: {
        sans: ["Urbanist", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        "display-h1": ["64px", { lineHeight: "72px", letterSpacing: "-0.5px", fontWeight: "600" }],
        h2: ["48px", { lineHeight: "56px", letterSpacing: "-0.3px", fontWeight: "600" }],
        h3: ["36px", { lineHeight: "44px", letterSpacing: "-0.2px", fontWeight: "600" }],
        h4: ["28px", { lineHeight: "36px", letterSpacing: "0px", fontWeight: "600" }],
        h5: ["22px", { lineHeight: "30px", letterSpacing: "0px", fontWeight: "600" }],
        h6: ["18px", { lineHeight: "26px", letterSpacing: "0px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-default": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "label-xl": ["20px", { lineHeight: "100%", letterSpacing: "0px", fontWeight: "600" }],
        "label-lg": ["16px", { lineHeight: "24px", letterSpacing: "0.1px", fontWeight: "600" }],
        "label-default": ["14px", { lineHeight: "20px", letterSpacing: "0.1px", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.2px", fontWeight: "600" }],
        "btn-primary": ["15px", { lineHeight: "22px", letterSpacing: "0.2px", fontWeight: "600" }],
        "btn-secondary": ["16px", { lineHeight: "20px", letterSpacing: "0.1px", fontWeight: "400" }],
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        "s+": "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "60px",
        "4xl": "64px",
        "5xl": "72px",
        "6xl": "76px",
        "7xl": "80px",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
    },
  },
  plugins: [],
};
export default config;
