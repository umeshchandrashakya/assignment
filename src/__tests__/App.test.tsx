import * as React from "react";
import App from "../components/App";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount, render } from "enzyme";
import { MemoryRouter } from "react-router";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Registration from "../components/pages/Registration";

describe("<App />", () => {
  it("renders without crashing", () => {
    const component = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
    expect(component).toMatchSnapshot();
  });

  test("invalid path should redirect to 404", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
          <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
  });

  test("valid path should not redirect to Login", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
          <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  test("valid path should redirect to Registration", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/registration"]}>
          <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Registration)).toHaveLength(1);
  });
  it("has a div tag", () => {
    const warpper = shallow(<App />);
    expect(warpper.find("div")).toHaveLength(1);
  });
});
