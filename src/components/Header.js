import { APP_LOGO } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [button, setButton] = useState("Login");
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex shadow-md justify-between h-16 p-1">
            <div className="w-28 h-auto mx-40">
                <img src={APP_LOGO} />
            </div>

            <div className="mx-40 m-auto">
                <ul className="flex gap-4">
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <Link to="/search">
                            <i className="bi bi-search pe-2"></i>
                            <span>Search</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <Link to="/">
                            <i className="bi bi-house pe-2"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <Link to="/contact">
                            <i className="bi bi-person pe-2"></i>
                            <span>Contact US</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <Link to="/about">
                            <i className="bi bi-question-circle pe-2"></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <Link to="/cart">
                            <i className="bi bi-cart pe-2"></i>
                            <span>Card ({cartItems.length})</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <i className="bi bi-person pe-2"></i>
                        <span className="font-bold">{loggedInUser}</span>
                    </li>
                    <li className="hover:bg-gray-100 px-1 cursor-pointer">
                        <span
                            onClick={() => {
                                if (button == "Login") {
                                    setButton("Logout");
                                } else {
                                    setButton("Login");
                                }
                            }}
                        >
                            {button}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
