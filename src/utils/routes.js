import {createBrowserRouter} from "react-router-dom";
// import About from "../components/About";
import Body from "../components/Body";
import Error from "../components/Error";
// import ContactUs from "../components/ContactUs";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import ProductDetail from "../components/ProductDetail";
import { lazy, Suspense } from "react";

const About = lazy(() => import("../components/About"));
const ContactUs = lazy(() => import("../components/ContactUs"));

export const Routes = {
    BODY: '/',
    ABOUT_US: '/about',
    CONTACT_US: '/contact',
    CART: '/cart',
    PRODUCT_DETAIL: '/product-detail/:id',
}

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: Routes.BODY,
                element: <Body />,
            },
            {
                path: Routes.ABOUT_US,
                element: <Suspense fallback={<h1>Wait it's Loading...</h1>}><About /></Suspense>,
            },
            {
                path: Routes.CONTACT_US,
                element: <Suspense fallback={<h1>Wait It's Loading...</h1>}><ContactUs /></Suspense>,
            },
            {
                path: Routes.CART,
                element: <Cart />,
            },
            {
                path: Routes.PRODUCT_DETAIL,
                element: <ProductDetail />,
            },
        ],
    },
    
]);