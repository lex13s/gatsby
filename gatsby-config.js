/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `804s3kognsxd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `dB1ldUzEM1wFDzBwNht9vd3Gi7v-LReK794e46BAhs0`,
      },
    },
  ],
}
