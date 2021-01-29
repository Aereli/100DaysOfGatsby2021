import React from 'react'
import Layout from '../components/layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SEO from '../components/SEO'

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
  const cities = data.locations.nodes
  return (
    <Layout>
      <SEO ttile="Locations" />
      {cities.map((location) => (
        <div key={location.key} styles={{ margin: `1rem` }}>
          <Link to={`/location/${location.city}`}>{location.city}</Link>
        </div>
      ))}
    </Layout>
  )
}

export default Locations
