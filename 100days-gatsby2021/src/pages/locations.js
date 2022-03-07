import React from 'react'
import Layout from '../components/layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SEO from '../components/SEO'
import GetLatestData from '../functions/getLatestData'


const Locations = () => {

const results = GetLatestData()

// const data = useStaticQuery(graphql`
//     query {
//       locations: allSanityLocations {
//         nodes {
//           id
//           city
//           description
//         }
//       }
//     }
//   `)
  // const cities = data.locations.nodes

  return (
    <Layout>
      <SEO ttile="Locations" />
      {results ? results.map((location) => (
        <div key={location._id} styles={{ margin: `1rem` }}>
          {/* <Link to={`/location/${location.city}`}>{location.city}</Link> */}
          <Link to={`/location/${location.city}`}>{location.city}</Link>
        </div>
      ))
        : <p>Loading...</p>
    }
    </Layout>
  )
}

export default Locations
