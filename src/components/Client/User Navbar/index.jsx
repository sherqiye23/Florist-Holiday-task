import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router';
import { FavoritesContext } from '../../../context/Favorites';
import { BasketContext } from '../../../context/Basket';

export default function UserNavbar() {
    let { favorites } = useContext(FavoritesContext)
    let { basket } = useContext(BasketContext)
    let [display, setDisplay] = useState("none")
    const hamburgerMenu = () => {
        if (display == "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }
    return (
        <>
            <Container>
                <div className='py-4 flex items-center justify-between gap-2.5'>
                    <img src="https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="logo" />
                    <nav className="hidden gap-7 lg:flex">
                        <NavLink to={"/"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>HOME</NavLink>
                        <a style={{ textDecoration: "none", color: "black" }}>ABOUT</a>
                        <a style={{ textDecoration: "none", color: "black" }}>SERVICES</a>
                        <a style={{ textDecoration: "none", color: "black" }}>SHOP</a>
                        <a style={{ textDecoration: "none", color: "black" }}>PAGES</a>
                        <a style={{ textDecoration: "none", color: "black" }}>BLOG</a>
                        <a style={{ textDecoration: "none", color: "black" }}>CONTACT</a>
                        <NavLink to={"/favorites"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }} className="flex items-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                            <span> &#40; {favorites.length} &#41; </span>
                        </NavLink>
                        <NavLink to={"/basket"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }} className="flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                            <span> &#40; {basket.length} &#41; </span>
                        </NavLink>
                    </nav>
                    <nav className='flex lg:hidden' onClick={() => hamburgerMenu()}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                    </nav>
                </div>
            </Container>
            <div style={{ display: display }} className='p-3 bg-[rgba(0,0,0,.3)]'>
                <Container>
                    <nav className='flex gap-6 flex-wrap '>
                        <NavLink to={"/"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>HOME</NavLink>
                        <a style={{ textDecoration: "none", color: "black" }}>ABOUT</a>
                        <a style={{ textDecoration: "none", color: "black" }}>SERVICES</a>
                        <a style={{ textDecoration: "none", color: "black" }}>SHOP</a>
                        <a style={{ textDecoration: "none", color: "black" }}>PAGES</a>
                        <a style={{ textDecoration: "none", color: "black" }}>BLOG</a>
                        <a style={{ textDecoration: "none", color: "black" }}>CONTACT</a>
                        <NavLink to={"/favorites"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }} className="flex items-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                            <span> &#40; 2 &#41; </span>
                        </NavLink>
                        <NavLink to={"/basket"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }} className="flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.F75 0 .375.375 0 0 1 .75 0Z"></path></svg>
                            <span> &#40; 2 &#41; </span>
                        </NavLink>
                    </nav>
                </Container>

            </div>
        </>
    )
}