import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
// import { Center } from '@chakra-ui/react'

const IndexPage = ({ data }) => {
  const sanity = data.sanityHomePage

  console.log(data.sanityHomePage)
  return (
    <Layout>
      <SEO title="AudioC0re" />
      <h1>Welcome to AudioCORE.</h1>
      <p>
        Currently on Challenge #2 of
        <a
          href="https://www.gatsbyjs.com/blog/challenge-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          #100DaysOfGatsby
        </a>
      </p>
      <Img fluid={sanity.image.asset.fluid} alt={sanity.home} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    sanityHomePage {
      id
      home
      image {
        asset {
          fluid(maxWidth: 1300, maxHeight: 950) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
