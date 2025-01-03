import AddProduct from "../pages/Admin/Add Product"
import AdminLayout from "../pages/Admin/AdminLayout"
import Dashboard from "../pages/Admin/Dashboard"
import DetailProduct from "../pages/Admin/Detail Product"
import EditProduct from "../pages/Admin/Edit Product"
import Products from "../pages/Admin/Products"
import Basket from "../pages/Client/Basket"
import Detail from "../pages/Client/Detail"
import Favorites from "../pages/Client/Favorites"
import Home from "../pages/Client/Home"
import NotFound from "../pages/Client/Not Found"
import UserLayout from "../pages/Client/UserLayout"


const ROUTES = [
    // user
    {
        path: "/",
        element: <UserLayout/>,
        children: [
            {
                path: ":id",
                element: <Detail/> 
            },
            {
                path: "",
                element: <Home/>
            },
            {
                path: "favorites",
                element: <Favorites/> 
            },
            {
                path: "basket",
                element: <Basket/> 
            },
            {
                path: "*",
                element: <NotFound/> 
            }
        ]
    },
    // admin
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>,   
            },
            {
                path: "products",
                element: <Products/>,   
            },
            {
                path: "products/add",
                element: <AddProduct/>,   
            },
            {
                path: "products/edit/:id",
                element: <EditProduct/>,   
            },
            {
                path: "products/detail/:id",
                element: <DetailProduct/>,   
            }
        ]
    }
]

export default ROUTES