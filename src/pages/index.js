import React from "react";
import { css } from "@emotion/core";

import Header from "../components/Header";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio/Portfolio";

const IndexPage = () => (
  <>
    <Header />
    <Main />
    <AboutMe />
    <Portfolio />
  </>
);

export default IndexPage;
