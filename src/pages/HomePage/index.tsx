import { useState } from "react";

import {
    useAllCategories,
    useAllProducts,
    useAllProductsFromCategory,
} from "@hooks";
import { ProductTable, CategoriesBar } from "@components";

const HomePage = () => {
    const allProducts = useAllProducts();
    const allCategories = useAllCategories();
    const [currentCategory, setCurrentCategory] = useState("");
    const allProductsFromCategory = useAllProductsFromCategory(currentCategory);

    const displayedProducts = currentCategory
        ? allProductsFromCategory
        : allProducts;

    return (
        <div>
            <CategoriesBar
                categories={allCategories}
                callBack={setCurrentCategory}
            />
            <ProductTable products={displayedProducts} />
        </div>
    );
};

export default HomePage;
