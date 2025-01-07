import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The art of snippets",
  description: "Tips and tricks for various software and tech.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tips', link: '/tips/intro' }
    ],

    sidebar: [
      {
        text: 'Tips',
        items: [
          { text: 'Introduction', link: '/tips/intro' },
          { text: 'ffprobe', link: '/tips/ffprobe' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
