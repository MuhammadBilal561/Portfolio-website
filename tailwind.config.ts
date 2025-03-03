import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        site: "url('../../public/1.jpg')",
        // about: "url('../../public/myabout.png')",
        // services: "url('../../public/services.png')",
      },
    },
  },
  plugins: [],
}
export default config
