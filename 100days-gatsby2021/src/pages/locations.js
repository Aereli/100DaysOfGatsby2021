import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const Locations = () => {
  const data = useStaticQuery(graphql`
    query {
      locations: allSanityLocations {
        nodes {
          id
          city
          description
        }
      }
    }
  `)
  console.log(data.locations.nodes)
  const cities = data.locations.nodes
  return (
    <Layout>
      <h1>Featured Locations!</h1>
      {cities.map((location) => (
        <p>{location.city}</p>
      ))}
    </Layout>
  )
}

export default Locations
