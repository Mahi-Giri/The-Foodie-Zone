import Card, { withOpenLabel } from "./Card";
import { useState, useEffect } from "react";
import Shimmar from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Main = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const RestaurantOpened = withOpenLabel(Card);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h1>Please Check Your Intenet Connection !!!</h1>;
    }

    if (restaurantList.length === 0) {
        return <Shimmar />;
    }

    return (
        <div className="main flex flex-col justify-center items-center my-4">
            <div className="restaurant-container">
                {restaurantList.map((restaurant, index) => {
                    return (
                        <Link key={restaurant?.id ?? index} to={"/restaurants/" + restaurant?.info?.parentId}>
                            {restaurant.info.isOpen ? <RestaurantOpened data={restaurant} /> : <Card data={restaurant} />}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Main;
