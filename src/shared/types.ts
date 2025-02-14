/**
 * Product type.
 * @param category: Category product is in
 * @param description: Describes the product
 * @param id: Product id
 * @param image: Image url
 * @param price: Price of product
 * @param rating: Object containing rate, the average rating,
 * and count, the number of ratings
 * @param title: What the product is labeled as
 */
export interface ProductType {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
}
