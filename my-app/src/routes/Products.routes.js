import AdminRoot from "../pages/AdminRoot";
import Detail from "../pages/Client/Detail/Detail";
import Giris from "../pages/Client/Giris";
import Home from "../pages/Client/Home/Home";
import Login from "../pages/Client/Login/Login";
import Wishlist from "../pages/Client/Wishlist/Wishlist";
import Yardim from "../pages/Client/Yardim/Yardim";
import Elan from "../pages/Client/Elan/Elan";
import Register from "../pages/Register/Register";
import SiteRoot from "../pages/SiteRoot";
import Add from "../pages/Client/Add/Add";
import Basket from "../pages/Client/Basket/Basket";

const ROUTER=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"Wishlist",
        element:<Wishlist/>
    },{
        path:"/:_id",
        element:<Detail/>
    },{
        path:"Yardim",
        element:<Yardim/>
    },
    {
        path:"Giris",
        element:<Giris/>
    },
    {
        path:"Login",
        element:<Login/>
    },
    {
        path:"Register",
        element:<Register/>
    },
    {
        path:"Elan",
        element:<Elan/>
    },
    {
        path:"Add",
        element:<Add/>
    },
    {
        path:"Basket",
        element:<Basket/>
    }
]
},{
    path:"Admin",
    element:<AdminRoot/>,
    children:[{

    }]
}]

export default ROUTER