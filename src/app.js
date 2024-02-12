import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const LazyLoading = lazy(() => import("./components/LazyLoading"));

const AppLayout = () => {
    const [user_name, setUser_name] = useState();
    useEffect(() => {
        const data = {
            loggedInUser: "Mahi",
        };
        setUser_name(data.loggedInUser);
    }, []);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: user_name }}>
                <>
                    <Header />
                    <Outlet />
                </>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/lazyloading",
                element: (
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <LazyLoading />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.querySelector(".app"));
root.render(<RouterProvider router={appRouter} />);
