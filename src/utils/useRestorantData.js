import { useEffect, useState } from "react";
import { RES_START_URL, RES_END_URL } from "../utils/constant";

const useRestorantData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_START_URL + resId + RES_END_URL);
        const json = await data.json();
        setRestaurantData(json?.data);
    };
    return restaurantData;
};

export default useRestorantData;
