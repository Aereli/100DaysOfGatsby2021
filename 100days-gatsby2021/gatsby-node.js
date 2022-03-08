// import path from 'path'
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await fetch(process.env.GATSBY_SANITY_GRAPHQL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query:
        `query {
            allLocations {
              _id
              city
              description
              image {
                asset {
                  url
                  metadata {
                    lqip
                  }
                }
              }
            }
          }`
    })
})
const locations = await res.json()

locations.data.allLocations.forEach((location) => {
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

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const { data } = await graphql(`
//     query {
//       allSanityLocations {
//         nodes {
//           id
//           city
//           description
//         }
//       }
//     }
//   `)
//   data.allSanityLocations.nodes.forEach((location) => {
//     createPage({
//       path: `/location/${location.city}`,
//       component: path.resolve('./src/templates/location-template.js'),
//       context: {
//         name: location.city,
//         // slug: location.city,
//       },
//     })
//   })
// }
