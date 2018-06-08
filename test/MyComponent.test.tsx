import * as React from "react"
import { shallow, ShallowWrapper } from "enzyme"

describe(`<MyComponent />`, () => {
  describe(`<div>asdf</div>`, () => {
    let tree: ShallowWrapper;

    beforeAll(() => {
      tree = shallow(<div className="reality">reality</div>);
    });

    it(`success test with enzyme matcher className`, () => {
      expect(tree.hasClass("reality")).toEqual(true);
    });

    it(`fail test with enzyme matcher text`, () => {
      expect(tree.text()).toEqual("expectation");
    });

    it(`fail test with enzyme matcher props`, () => {
      expect(tree.props()).toHaveProperty("expectation", "expectation");
    });

    it(`create a snapshot`, () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
