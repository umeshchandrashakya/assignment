import * as React from "react";

import InputText from "../components/atoms/InputText";
import enzyme from "enzyme";

//import { StyledInput } from "../components/atoms/InputText";
import TestUtils from "react-dom/test-utils";
interface Props {
  placeholder: string;
}

let wrapper: enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = enzyme.shallow(<InputText placeholder={"UserName"} />);
});

it("renders props when passed in", () => {
  expect(wrapper.find({ placeholder: "UserName" })).toHaveLength(1);
});

it("input text change", () => {
  wrapper
    .find({ type: "text" })
    .simulate("change", { target: { value: "on typing" } });
  expect(wrapper.find({ type: "text" }).props().value).toBe("on typing");
});
afterEach(() => {
  wrapper.unmount();
});
