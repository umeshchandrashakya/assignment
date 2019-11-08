import * as React from "react";
import { render } from "enzyme";
import Home from "../components/pages/Home";
import { MemoryRouter } from "react-router-dom";

describe("<Home />", () => {
    it("should renders without crashing", () => {
        const component = render(<MemoryRouter><Home /></MemoryRouter>);
        expect(component).toMatchSnapshot();
    });
});
