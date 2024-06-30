import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': 'radial-gradient(circle at 50% 50%, #E2B2FF, #9F5AFF)',
      }),
    },
  },
  plugins: [],
};
export default config;
