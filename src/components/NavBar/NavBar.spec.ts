import { expect, describe, it } from "vitest";

import { NavBar } from "./index";

describe("Navbar", () => {
    it.skip("should render", () => {
        const render = NavBar();
        expect(render).toMatchSnapshot();
    });
});
