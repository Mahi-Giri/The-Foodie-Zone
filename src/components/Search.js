import { useState, useEffect } from "react";
import Search_Card from "./Search_Card";

const Search = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filtedRestaurant, setfiltedRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltedRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className="flex flex-col justify-center items-center my-4">
            <div className="flex justify-between item-center my-4 w-9/12">
                <div className="flex w-3/5 m-auto shadow-md h-9 my-8 rounded-sm">
                    <input
                        className="w-full h-full outline-0 text-base px-3"
                        type="text"
                        data-testid="searchInput"
                        placeholder="Search for restaurants and food..."
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        className="text-base px-4 outline-1 bg-gray-500 text-white rounded-e-sm"
                        onClick={() => {
                            const filtedRestaurants = restaurantList.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfiltedRestaurant(filtedRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div data-testid="card" className="flex">
                {filtedRestaurant.map((restaurant,index) => {
                    return <Search_Card key={index} data={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Search;
