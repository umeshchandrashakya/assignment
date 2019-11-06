import * as React from "react";

import InputText from "../components/atoms/InputText";
import { shallow } from "enzyme";
import { StyledInput } from "../components/atoms/InputText";

interface Props {
  placeholder: string;
}

const wrap = (props: Props) => shallow(<InputText {...props} />);
it("have a div tag", () => {
  const wrapper = wrap({ placeholder: "UserName" });
  expect(wrapper.find("div")).toHaveLength(1);
  expect(wrapper.find("br")).toHaveLength(1);
});

it("renders props when passed in", () => {
  const wrapper = wrap({ placeholder: "UserName" });
  expect(wrapper.find({ placeholder: "UserName" })).toHaveLength(1);
});

it("input text change", () => {
  const wrap = (props: Props) => shallow(<StyledInput {...props} />);
  const wrapper = wrap({ placeholder: "UserName" });
  const usernameInput = wrapper.find("StyledInput");
  usernameInput.simulate("change", { target: { value: "umesh@hcl.com" } });
  usernameInput.update();
  expect(usernameInput.find("text").prop("value")).toEqual("umesh@hcl.com");
});
