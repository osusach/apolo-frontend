import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
        'sans': ["Inter", "sans-serif"],
        'display': ['Chamelton', 'sans-serif']
        },
  },

  plugins: []
} as Config;