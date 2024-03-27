import React, {useState, Suspense} from 'react';
import {PiMagnifyingGlassLight, PiShoppingCartLight, PiXCircleLight} from "react-icons/pi";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    const [isSearch, setIsSearch] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className={`search ${isSearch ? "search-active" : ""}`}>
                    <PiMagnifyingGlassLight className="search__find fs-22"/>
                    <input type="text" placeholder="Называние категории или товара"/>
                    <PiXCircleLight className="search__close fs-22" onClick={() => setIsSearch(!isSearch)}/>
                </div>

                <div className="content">
                    <button className="btn" onClick={() => setIsSearch(!isSearch)}>
                        <PiMagnifyingGlassLight className="fs-22"/>
                    </button>

                    <Link to="/" className="navbar__logo fs-18"><span>Easy</span>Menu</Link>

                    <button className="btn btn-link btn-count">
                        <Link to="/cart" data-count="2"><PiShoppingCartLight className="fs-22"/></Link>
                    </button>
                </div>
            </nav>

            <main className="wrapper">
                <Suspense fallback={<div className="loading"></div>}>
                    <Outlet/>
                </Suspense>
            </main>

            <footer>
                <p>Copyright © 2024</p>
            </footer>
        </>
    );
};

export default Layout;