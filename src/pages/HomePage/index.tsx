import { useState } from "react";

import {
    useAllCategories,
    useAllProducts,
    useAllProductsFromCategory,
} from "@hooks";
import { ProductTable, CategoriesBar } from "@components";
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

export const HomePage = () => {
    const allProducts = useAllProducts();
    const allCategories = useAllCategories();
    const [currentCategory, setCurrentCategory] = useState("");
    const allProductsFromCategory = useAllProductsFromCategory(currentCategory);

    // Check if authenticated or reroute to login page
    useCheckAuthentication(false, "/login");

    // Display all products or products from current category
    const displayedProducts = currentCategory
        ? allProductsFromCategory
        : allProducts;

    return (
        <div id="homepage" className="flex-auto">
            <CategoriesBar
                categories={allCategories}
                callBack={setCurrentCategory}
            />
            <ProductTable products={displayedProducts} />
        </div>
    );
};

export default HomePage;
