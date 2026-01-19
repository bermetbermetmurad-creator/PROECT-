import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/home/Home";
import About from "./components/About_Us/About";
import Catalog from "./components/Catalog/Catalog";
import Product from "./components/Product/Product";
import News from "./components/news/News";
import Discounts from "./components/Discounts/Discounts";
import NewProducts from "./components/NewProducts/NewProducts";
import CartModal from "./components/CartModal/CartModal";
import Natural from "./components/Natural/Natural";
import NewWr from "./components/NewWr/NewWr";
import Muka from "./components/Muka/Muka";
import Neww1 from "./components/Neww1/Neww1";
import Contact from "./components/Contact/Contact";
import AboutCart from "./components/AboutCart/AboutCart";
import AboutCart1 from "./components/AboutCart/AboutCart1";
import AboutCart2 from "./components/AboutCart/AboutCart2";
import OffersPage from "./components/OffersPage/OffersPage";
import MyComponent from "./components/MyComponent/MyComponent";
import Checkout from "./components/Checkout";




export const muRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'catalog',
                element: <Catalog />
            },
            {
                path: 'catalog/:id',
                element: <Product />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'home/catalog',
                element: <Catalog />
            },
            {
                path: '/discounts',
                element: <Discounts />
            },
            {
                path: '/new',
                element: <NewProducts />
            },
            {
                path: 'home/about',
                element: <About />
            },
            {
                path: 'cart',
                element: <CartModal />
            },
            {
                path: 'natural',
                element: <Natural />
            },
            {
                path: "newwr",
                element: <NewWr />
            },
            {
                path: "muka",
                element: <Muka />
            },
            {
                path: "news/:id",
                element: <Neww1 />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "aboutcart",
                element: <AboutCart />
            },
            {
                path: "aboutcart1",
                element: <AboutCart1 />
            },
            {
                path: "aboutcart2",
                element: <AboutCart2 />
            },
            {
                path: "offers-page",
                element: <OffersPage />
            },
            {
                path: 'product/:id',
                element: <Product />
            },
            {
                path: 'catalog',
                element: <MyComponent />
            },
            {
                path: 'mycomp',
                element: <MyComponent />
            },
            {
                path: '/checkout',
                element: <Checkout/>
            },   
        ]
    }
])