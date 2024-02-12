import { CARD_IMAGE } from "../utils/constant";

const Search_Card = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name } = data?.info;

    return (
        <div className="flex flex-col w-40 place-items-center gap-3">
            <img className="w-28 h-28 rounded-full" src={CARD_IMAGE + cloudinaryImageId} />
            <h3 className="text-sm font-semibold text-center">{name}</h3>
        </div>
    );
};

export default Search_Card;
