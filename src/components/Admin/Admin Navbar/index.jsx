import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router';
import { FavoritesContext } from '../../../context/Favorites';
import { BasketContext } from '../../../context/Basket';


export default function AdminNavbar() {
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
                    <nav className="hidden gap-7 md:flex">
                        <NavLink to={"/admin"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>DASHBOARD</NavLink>
                        <NavLink to={"/admin/products"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>PRODUCTS</NavLink>
                        <NavLink to={"/admin/products/add"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>ADD PRODUCT</NavLink>
                    </nav>
                    <nav className='flex md:hidden' onClick={() => hamburgerMenu()}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                    </nav>
                </div>
            </Container>
            <div style={{ display: display }} className='p-3 my-2 bg-[rgba(0,0,0,.3)]'>
                <Container>
                    <nav className="gap-7 flex">
                        <NavLink to={"/admin"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>DASHBOARD</NavLink>
                        <NavLink to={"/admin/products"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>PRODUCTS</NavLink>
                        <NavLink to={"/admin/products/add"} style={({ isActive }) => {
                            return isActive ? { color: "#f45d96", textDecoration: "none" } : { color: "black", textDecoration: "none" };
                        }}>ADD PRODUCT</NavLink>
                    </nav>
                </Container>
            </div>
        </>
    )
}