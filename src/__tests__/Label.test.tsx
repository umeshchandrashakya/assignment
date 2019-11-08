import * as React from "react";
import { render, shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Label from "../components/atoms/Label";

describe("<Label />", () => {
    it("should renders without crashing", () => {
        const component = render(<MemoryRouter><Label value=
            'Username' /></MemoryRouter>);
        expect(component).toMatchSnapshot();
    });

    it("should render with props provided", () => {
        const wrapper = mount(<Label value=
            'Username' />);
        wrapper.update();
        const text = wrapper.find('label').text();
        expect(text).toEqual('Username');
    });
});
