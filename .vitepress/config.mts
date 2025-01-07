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
        text: 'Tips and useful info',
        items: [
          { text: 'Introduction', link: '/tips/intro' },
          { text: 'ffmpeg', link: '/tips/ffmpeg' },
          {
            text: 'python',
            collapsed: false,
            items: [
              { text: 'ruff', link: '/tips/python/ruff' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
