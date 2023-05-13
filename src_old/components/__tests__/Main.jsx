import React from "react";
import renderer from "react-test-renderer";

import Main from "../Main";

describe("<Main/>", () => {
  it("Render correctly", () => {
    const tree = renderer.create(<Main />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
