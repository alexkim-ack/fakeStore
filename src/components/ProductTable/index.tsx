import { ProductType } from "@/shared/types";

interface ProductTableProps {
    products: ProductType[];
}

/**
 * A product table that displays products provided to it
 * using a 4x grid.
 * @param products ProductType[]
 * @returns React Component
 */
export const ProductTable = ({ products }: ProductTableProps) => {
    return (
        <>
            <div className="h-[124px]" />
            <ul className="list-none grid grid-cols-4 justify-items-center">
                {products?.map((product: ProductType, index) => {
                    return (
                        <li
                            className="w-[300px] p-6 border-2 border-gray-500
                                m-[8px] rounded-md hover:bg-gray-100"
                            key={index}
                        >
                            <img
                                className="w-[270px] h-[270px] object-contain
                                    bg-white bg-center"
                                src={product.image}
                            />
                            <p className="p-[6px] line-clamp-2 text-ellipsis font-bold">
                                {`$${product.price} - ${product.title}`}
                            </p>
                            <p className="text-left line-clamp-4 text-ellipsis">
                                {product.description}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ProductTable;
