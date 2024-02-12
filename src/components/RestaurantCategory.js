import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            <div className="w-6/12 my-4 mx-auto p-4 bg-gray-50">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        <i className="bi bi-chevron-down"></i>
                    </span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
