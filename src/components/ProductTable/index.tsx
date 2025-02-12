import { useState, useEffect } from "react";
import { ProductType } from "@/shared/types";

interface ProductTableProps {
    products: ProductType[];
}
export const ProductTable = ({ products }: ProductTableProps) => {
    return (
        <ul className="list-none grid grid-cols-4">
            {products?.map((product: ProductType) => {
                return (
                    <li className="flex-auto p-5">
                        <img src={product.image} />
                        <p>
                            <span>{"$" + product.price + " "}</span>
                            <span>{product.description}</span>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductTable;
