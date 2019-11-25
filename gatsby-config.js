module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    'gatsby-theme-waves',
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Ramblings`,
    author: `Stephen Parish`,
    description: `Code, coffee, cycles`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/stephenparish`,
      },
      {
        name: `github`,
        url: `https://github.com/stephenparish`,
      },
    ],
  },
}
