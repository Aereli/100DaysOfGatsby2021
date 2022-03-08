import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import GetLatestData from '../functions/getLatestData'

const SingleLocation = ({ data: { location } }) => {

  const results = GetLatestData()
  const filteredResults = results && results.filter(city => location.city === city.city )

  return (
    <Layout>
      {filteredResults && 
        <div>
        <h1>{filteredResults[0].city}</h1>
        <p>{filteredResults[0].description}</p>
        <img
              width="500"
              height="400"
              src={`${filteredResults[0].image.asset.url}`}
              alt={filteredResults[0].name}
              style={{
                background: `url(${filteredResults[0].image.asset.metadata.lqip})`,
                backgroundSize: 'cover',
              }}
            />
      </div>
      }
    </Layout>
  )
}

export default SingleLocation

export const query = graphql`
  query($name: String!) {
    location: sanityLocations(city: { eq: $name }) {
      city
      # id
      # description
      # image {
      #   asset {
      #     fluid(maxWidth: 1000, maxHeight: 750) {
      #       ...GatsbySanityImageFluid
      #     }
      #   }
      # }
    }
  }
`
