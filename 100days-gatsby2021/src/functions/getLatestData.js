
import React, { useState, useEffect } from 'react';

const GetLatestData = () => {

    const [data, setData] = useState()

        useEffect(() => {
             
            fetch(process.env.GATSBY_SANITY_GRAPHQL, {
    
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
            .then(res => res.json())
            .then(res => setData(res.data.allLocations))
        },[])
  return (
           data

  )
}

export default GetLatestData