import { expect, describe, it } from "vitest";

import { ProductTable } from "./index";
import { ProductType } from "@/shared/types";

const test: ProductType[] = [
    {
        category: "men's clothing",
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
];

describe("ProductTable", () => {
    it("should render", () => {
        const render = ProductTable({
            products: test,
            isLoading: false,
            error: null,
        });
        expect(render).toMatchSnapshot();
    });
});
