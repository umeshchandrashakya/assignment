import * as React from "react";
import { render, shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Button from "../components/atoms/Button";

describe("<Botton />", () => {
    it("should renders without crashing", () => {
        const component = render(<MemoryRouter><Button buttonText=
            'Submit' /></MemoryRouter>);
        expect(component).toMatchSnapshot();
    });

    it("should render with props provided", () => {
        const wrapper = mount(<Button buttonText=
            'Submit' />);
        wrapper.update();
        const text = wrapper.find('button').text();
        expect(text).toEqual('Submit');
    });
});
