/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllCategories, useAllProducts } from "@hooks";
import { ProductTable } from "@components";

const HomePage = () => {
    const allProducts = useAllProducts();
    console.log(allProducts);
    const allCategories = useAllCategories();
    return (
        <div>
            <ProductTable products={allProducts} />
        </div>
    );
};

export default HomePage;
