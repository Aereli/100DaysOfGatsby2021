import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const SingleLocation = ({ data: { location } }) => {
  return (
    <Layout>
      <h1>{location.city}</h1>
      <p>{location.description}</p>
      <Img fluid={location.image.asset.fluid} alt={location.city} />
    </Layout>
  )
}

export default SingleLocation

export const query = graphql`
  query($name: String!) {
    location: sanityLocations(city: { eq: $name }) {
      city
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
