import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { FormiumForm } from '@formium/react'
import { formium } from '../lib/formium'
import { graphql } from 'gatsby'

export default function Contact({ data }) {
  console.log(data)
  const [success, setSuccess] = React.useState(false)

  if (success) {
    return <div>You are awsome! We will contact you shortly!</div>
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h2>Built by Eric using SanityIO as the headless CMS</h2>
      <a
        href="https://github.com/Aereli/100DaysOfGatsby2021"
        rel="noreferrer"
        target="_blank"
      >
        Check out the github ↩
      </a>
      <FormiumForm
        data={data.formiumForm}
        onSubmit={async (values) => {
          // Send form values to Formium
          await formium.submitForm('audiC0re', values)
          setSuccess(true)
        }}
      />

      <form
        action="https://api.formium.io/submit/601afbc50bd76a000132f11c/contact"
        method="POST"
      >
        <input type="email" name="email" id="email" />
        <input type="name" name="name" id="name" />
        <button type="submit">send!</button>
      </form>
    </Layout>
  )
}

export const query = graphql`
  {
    formiumForm {
      id
      name
    }
  }
`
