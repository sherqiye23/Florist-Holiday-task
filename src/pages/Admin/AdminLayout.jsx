import { Outlet } from "react-router-dom"
import AdminFooter from "../../components/Admin/Admin Footer"
import AdminNavbar from "../../components/Admin/Admin Navbar"


export default function AdminLayout() {
    return (
        <>
            <AdminNavbar/>
            <Outlet/>
            <AdminFooter/>
        </>
    )
}