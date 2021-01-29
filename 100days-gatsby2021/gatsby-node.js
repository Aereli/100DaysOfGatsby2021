// import path from 'path'
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allSanityLocations {
        nodes {
          id
          city
          description
        }
      }
    }
  `)
  data.allSanityLocations.nodes.forEach((location) => {
    createPage({
      path: `/location/${location.city}`,
      component: path.resolve('./src/templates/location-template.js'),
      context: {
        name: location.city,
        // slug: location.city,
      },
    })
  })
}
