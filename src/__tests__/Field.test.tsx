import * as React from "react";
import * as enzyme from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Field from "../components/molecules/Field";
import Label from "../components/atoms/Label";

describe("<Field />", () => {

    let wrapper: enzyme.ReactWrapper;

    beforeEach(() => {
        wrapper = enzyme.mount(<Field labelValue=
            'Username' inputPlaceholder="Username" />);
    })

    it("should renders without crashing", () => {
        const component = enzyme.render(<MemoryRouter><Field labelValue=
            'Username' inputPlaceholder="Username" /></MemoryRouter>);
        expect(component).toMatchSnapshot();
    });

    it("should render with props provided label value", () => {
        const text = wrapper.find('label').text();
        expect(text).toEqual('Username');
    });
});
