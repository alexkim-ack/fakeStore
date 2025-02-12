import { expect, describe, it } from "vitest";

import { CategoriesBar } from "./index";

const test: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
];

describe("CategoriesBar", () => {
    it("should render", () => {
        const render = CategoriesBar({ categories: test, callBack: () => {} });
        expect(render).toMatchSnapshot();
    });
});
