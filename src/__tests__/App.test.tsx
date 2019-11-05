import * as React from "react";
import { Component } from "react";
import App from "../components/App";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount, render } from "enzyme";

import { MemoryRouter } from "react-router";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Registration from "../components/pages/Registration";
import { useActions, DefaultTypelessProvider } from "typeless";
import {
  LoginActions,
  getLoginState
} from "../components/typeless/interface/login";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  test("invalid path should redirect to 404", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <DefaultTypelessProvider>
          <App />
        </DefaultTypelessProvider>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
  });

  test("valid path should not redirect to 404", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
     <DefaultTypelessProvider>
          <App />
        </DefaultTypelessProvider>
      </MemoryRouter>
    );

   
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
