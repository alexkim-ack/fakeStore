interface CategoriesBarProps {
    categories: string[];
    callBack: (val: string) => void;
    isLoading: boolean;
    error: unknown;
}

/**
 * Category bar that is displayed underneath the NavBar. User is able to
 * click on a category to see all products in that category.
 * @param categories string[]
 * @param callback (val: string) => void
 * @param isLoading boolean
 * @param error unknown
 * @returns React Component
 */
export const CategoriesBar = ({
    categories,
    callBack,
    isLoading,
}: CategoriesBarProps) => {
    return (
        <ul
            className="fixed top-[88px] left-[0px]
                w-full flex flex-row items-between
                border-green-500
                bg-green-500 list-none"
        >
            {isLoading && <li className="h-[36px]" />}
            {categories?.map((category) => (
                <li
                    onClick={() => callBack(category)}
                    className="p-[6px] hover:bg-green-700 rounded-md"
                >
                    <span className="text-white">{category}</span>
                </li>
            ))}
        </ul>
    );
};

export default CategoriesBar;
