module.exports = {
  siteMetadata: {
    title: `Poll App`,
    siteStories: {
      title: `Stories of Our Time`,
    },
    siteEvents: {
      title: `Pandas Eating Lots`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: 'keyT4kaMtXoFjjGqh',
        baseId: 'app7Dd4JJ1IwhOgHS',
        tableName: 'cms',
        tableView: 'published',
        queryName: ''
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-plugin-typography`,
    options: {pathToConfigModule: `src/utils/typography.js`},
    },
  ],
}
