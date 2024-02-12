import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestorantData from "../utils/useRestorantData";
import RestaurantCategory from "./RestaurantCategory";
import Shimmar from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantData = useRestorantData(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (restaurantData === null) {
        return <Shimmar />;
    }

    const { name, cuisines, costForTwoMessage } = restaurantData?.cards[0]?.card?.card?.info;
    const categories = restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}{" "}
            </p>
            {categories.map((category, index) => {
                return (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
