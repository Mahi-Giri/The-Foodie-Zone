import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart(cartItems));
    };
    return (
        <div className="w-6/12 shadow-lg m-auto flex flex-col mt-8 p-4">
            <h1 className="text-4xl p-3">Cart</h1>
            <div className="flex flex-col">
                <button className="shadow-md px-3 py-1 mb-4 rounded-md bg-gray-100 m-auto text-xl" onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && <p className="m-auto font-bold text-xl">Cart is empty Please add items to the cart!</p>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
