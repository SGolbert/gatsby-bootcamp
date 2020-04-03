import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me!</h1>
      <p>Mail: john.doe@gmx.de</p>
      <p>Tel: 01234 - 56789</p>
      <a
        href="https://twitter.com/alelernerok"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </Layout>
  )
}

export default ContactPage
