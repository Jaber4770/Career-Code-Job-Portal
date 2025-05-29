import { createBrowserRouter } from "react-router";
import Root from "./Layouts/Root";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import JobDetails from "./Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJobs from "./Components/ApplyJobs";
import MyApplication from "./Pages/MyApplication";
import AddJob from "./Pages/AddJob";
import MyPostedJobs from "./Pages/MyPostedJobs";
import ViewApplication from "./Pages/ViewApplication";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/jobDetails/:id',
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
            },
            {
                path: '/applyforjob/:id',
                element:<PrivateRoute><ApplyJobs></ApplyJobs></PrivateRoute>
            },
            {
                path: "/myapplication",
                element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
            },
            {
                path: '/addjob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: "/mypostedjobs",
                element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: "/viewapplication/:id",
                element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.id}`)
            }
        ]
    }
]);

