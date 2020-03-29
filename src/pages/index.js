import React from "react"

import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "nomad-pilates.png" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    avatar: file(relativePath: { eq: "julie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { logo, avatar } = data
  return (
    <Layout>
      <SEO title="Nomad Pilates" />
      <h1>
        <Image
          fluid={logo.childImageSharp.fluid}
          alt="Nomad Pilates"
          style={{ maxWidth: "480px" }}
        />
      </h1>
      <h2 className="subheader">Individualized, online coaching</h2>
      <div className="lead">
        <p>
          The objective is simple: <strong>Empower you.</strong>
        </p>
        <p>
          Support you in your practice, unbind you from attaching your strength
          to your environment.
        </p>
        <p>
          Your experience, your process - it takes place within you. We carry
          all that we need within us; the environment is merely a catalyst.
        </p>
      </div>
      <div id="why-pilates">
        <h3>Why Pilates?</h3>

        <p>
          In Pilates we focus on the deeper, stabilizing muscles. They define
          our posture, which in turn forms the base for all movement. By looking
          at habituated movement patterns and their deeply rooted origin, we can
          begin to make subtle changes that can have immense effects; like a
          Domino block affecting all other, larger muscles and movements.
        </p>
        <p>
          Providing efficiency and longevity are the aim - by moving better, we
          save valuable energy and increase the mileage on our body.
        </p>

        <p>
          Becoming aware of movement habits and the accompanying sensations that
          we have become used to, enables us to transform them - from the inside
          out.
        </p>
      </div>
      <div className="columns">
        <div id="about">
          <Image
            fluid={avatar.childImageSharp.fluid}
            alt="Julie Van den Enden"
            className="avatar"
            style={{ maxWidth: "480px" }}
          />
          <div className="biography">
            <p>
              Julie is a movement practitioner, dancer and nomad. Looking at the
              human being in a holistic sense, she views the body as our
              vehicle; the solid base that defines the quality of our lives.
            </p>
            <p>
              Having a background in physiotherapy made her aware of the immense
              value of the physical body’s optimal functioning, and how the mind
              influences its state.
            </p>
            <p>
              “It is essential to not only focus on ‘that’ we move, but moreover
              on ‘how’ we move; because how we move one time, is how we move
              every time.”
            </p>
          </div>
        </div>
        <div>
          <p>
            This world can often make us feel anything but rooted, taking us far
            away from our visceral strength, distracting us from the inner
            receptivity that guides us. The further we get away from our
            physical bodies and the sensations that come with it, the less
            access we have to our inner compass. The less we feel grounded on
            this earth, the more easily distracted and controlled - or reactive
            - we are.
          </p>
          <p>
            We carry a vast source of energy within us, which we can tap into -
            at any time, anywhere. I want to invite you to come home to yourself
            - and remind you that your strength lies nowhere outside of you; but
            within you. I cannot move for you, but I can move with you.
          </p>
        </div>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} Nomad Pilates
        {" - "}
        <a
          href="mailto:julie@nomadpilates.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          julie@nomadpilates.online
        </a>
      </footer>
    </Layout>
  )
}

export default IndexPage
