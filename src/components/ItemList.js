import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { ITEM_IMG } from "../utils/constant";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    return (
        <div>
            {items.map((item) => (
                <div className="flex justify-between my-5 border-b-2 border-gray-300 text-left" key={item.card.info.id} data-testid="food-items">
                    <div className="flex flex-col m-4">
                        <h4 className="font-bold">{item.card.info.name}</h4>
                        <span className="text-sm">
                            {item.card.info.price ? (
                                <span>&#8377;{item.card.info.price / 100}</span>
                            ) : (
                                item.card.info.defaultPrice && <span>&#8377;{item.card.info.defaultPrice / 100}</span>
                            )}
                        </span>
                        <p className="text-xs max-w-xl">{item.card.info.description}</p>
                    </div>
                    <div className="flex flex-col my-2">
                        <img className="w-32 h-32 rounded-md my-2" src={ITEM_IMG + item.card.info.imageId} />
                        <button className="border border-gray-300 text-[#60B246] rounded-sm bg-white" onClick={() => handleAddItem(item)}>
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
