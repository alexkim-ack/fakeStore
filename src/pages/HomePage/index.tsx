/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllProducts } from "@hooks/useAllProducts";

const HomePage = () => {
    const allProducts = useAllProducts();
    console.log(allProducts);
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
