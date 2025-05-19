// packages/ui/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // all components in this package
    "../../apps/user-app/app/**/*.{js,ts,jsx,tsx,mdx}", // if used in user-app
    "../../apps/merchant-app/app/**/*.{js,ts,jsx,tsx,mdx}", // if used in merchant-app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;