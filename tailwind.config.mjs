/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
