interface CategoriesBarProps {
    categories: string[];
    callBack: (val: string) => void;
}

/**
 * Category bar that is displayed underneath the NavBar. User is able to
 * click on a category to see all products in that category.
 * @param categories string[]
 * @param callback (val: string) => void
 * @returns React Component
 */
export const CategoriesBar = ({ categories, callBack }: CategoriesBarProps) => {
    return (
        <ul className="border-b-4 border-green-500 bg-green-500 list-none">
            {categories.map((category) => (
                <li onClick={() => callBack(category)}>
                    <span className="text-white">{category}</span>
                </li>
            ))}
        </ul>
    );
};

export default CategoriesBar;
