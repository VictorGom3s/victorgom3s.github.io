import React from "react";

import SEO from "../components/SEO";
import Header from "../components/Header";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio/Portfolio";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

const IndexPage = () => (
  <>
    <SEO title="VictorGom3s" />
    <Header />
    <Main />
    <AboutMe />
    <Portfolio />
    <Contato />
    <Footer />
  </>
);

export default IndexPage;
