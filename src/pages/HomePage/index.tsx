/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllCategories, useAllProducts } from "@hooks";

const HomePage = () => {
    const allProducts = useAllProducts();
    const allCategories = useAllCategories();
    return (
        <div>
            {allProducts.map((product: any) => {
                return (
                    <>
                        <img src={product?.image} />
                        <p>
                            <span>{"$" + product?.price + " "}</span>
                            <span>{product?.description}</span>
                        </p>
                    </>
                );
            })}
        </div>
    );
};

export default HomePage;
