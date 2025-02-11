import { useAllProducts } from "@Hooks/useAllProducts";

const HomePage = () => {
    const allProducts = useAllProducts();
    return <div>{allProducts}</div>;
};

export default HomePage;
