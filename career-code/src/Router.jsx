import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "./Layouts/Root";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    }
]);