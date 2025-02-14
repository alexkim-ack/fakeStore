import useAllCategories from "./useAllCategories";
import useAllProducts from "./useAllProducts";
import useAllProductsFromCategory from "./useAllProductsFromCategory";
import useCheckAuthentication from "./useCheckAuthentication";

const Hooks = [
    useAllCategories,
    useAllProducts,
    useAllProductsFromCategory,
    useCheckAuthentication,
];

export default Hooks;
export {
    useAllCategories,
    useAllProducts,
    useAllProductsFromCategory,
    useCheckAuthentication,
};
