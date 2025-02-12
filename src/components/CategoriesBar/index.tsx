interface CategoriesBarProps {
    categories: string[];
    callBack: (val: string) => void;
}

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
