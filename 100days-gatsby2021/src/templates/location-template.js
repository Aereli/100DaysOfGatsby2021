import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const SingleLocation = ({ data }) => {
  console.log(data.location)
  return (
    <Layout>
      <h1>{data.location.city}</h1>
      <p>{data.location.description}</p>
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
    }
  }
`
