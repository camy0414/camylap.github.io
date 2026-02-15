export default defineConfig({
  compressHTML: true,

  site: 'https://camy0414.github.io',
  base: '/camylap.github.io/',

  integrations: [
    compress(),
    icon(),
    mdx(),
    sitemap()
  ],

  vite: enhanceConfigForWorkspace(viteConfig),

  env: {
    schema: {
      BLOG_API_URL: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: 'https://jsonplaceholder.typicode.com/posts',
      }),
    },
  },
})
