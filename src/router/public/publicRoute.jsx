import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";

const publicRoute = [
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            { path: "/", element: <Home></Home> }
        ]
    }
]

export default publicRoute;