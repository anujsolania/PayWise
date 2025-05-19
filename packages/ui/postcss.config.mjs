// packages/ui/postcss.config.mjs
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default {
  plugins: {
    tailwind: {
      config: path.resolve("./tailwind.config.js"),
    },
    autoprefixer: {},
  },
};