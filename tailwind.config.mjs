/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        local_accent: 'var(--accent)',
        local_title: 'var(--title)',
        local_title_2: 'var(--title-2)',
        local_subtitle: 'var(--subtitle)',
        local_text: 'var(--text)',
        local_text_2: 'var(--text-2)',
        local_button: 'var(--button)',
        local_icon: 'var(--icon)',
        local_icon_2: 'var(--icon-2)',
        local_icon_3: 'var(--icon-3)',
        local_background: 'var(--background)',
        local_background_2: 'var(--background-2)',
        local_background_3: 'var(--background-3)',
        local_background_4: 'var(--background-4)',
        local_background_5: 'var(--background-5)',
      },
    },
  },
  plugins: [],
}
