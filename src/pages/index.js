import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Header from "../components/Header";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio/Portfolio";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

const IndexPage = () => (
  <>
    <SEO
      title="VictorGom3s"
      description={"VictorGom3s' personal portfolio website"}
    />
    <Header />
    <Main />
    <AboutMe />
    <Portfolio />
    <Contato />
    <Footer />
  </>
);

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
