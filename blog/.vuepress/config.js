module.exports = {
  title: 'felixbo’s blog',
  description: 'This is a blog',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  base:'/blog/',
  
  plugins: [
    ['@vuepress/blog',
    {
      directories: [
        {
          // Unique ID of current classification
          id: 'post',
          // Target directory
          dirname: '_posts',
          // Path of the `entry page` (or `list page`)
          path: '/',
        },
      ],
      feed: {
          canonical_base: 'https://tbdream.github.io/blog/',
         },
      sitemap: {
          hostname: 'https://tbdream.github.io/blog/'
        },
     
      frontmatters: [
        {
          // Unique ID of current classification
          id: 'tag',
          // Decide that the frontmatter keys will be grouped under this classification
          keys: ['tag'],
          // Path of the `entry page` (or `list page`)
          path: '/tag/',
          // Layout of the `entry page`
          layout: 'Tags',
          // Layout of the `scope page`
          scopeLayout: 'Tag'
        },
      ],
      pagination: {
         lengthPerPage: 10,
        },
     },
   
  
  ]

],
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
