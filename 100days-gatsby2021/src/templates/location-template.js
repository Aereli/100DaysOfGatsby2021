import React from 'react'
// import { graphql } from 'gatsby'

const SingleLocation = () => {
  return (
    <>
      <h1>this is location</h1>
    </>
  )
}

export default SingleLocation

// export const query = graphql`
//   query($slug: String!) {
//     person: sanityPerson(slug: { current: { eq: $slug } }) {
//       name
//       id
//       description
//       image {
//         asset {
//           fluid(maxWidth: 1000, maxHeight: 750) {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//     }
//   }
// `
