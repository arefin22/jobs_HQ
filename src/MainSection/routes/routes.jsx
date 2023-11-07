import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../root";
import Error from "../pages/Error";
import App from "../pages/App";
import AddJob from "../pages/AddJob";
import Jobs from "../pages/Jobs";
import AppliedJobs from "../pages/AppliedJobs";
import MyJobs from "../pages/MyJobs";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error />,
        children:[
            {
                path: '/',
                element: <App></App>
            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>,
                loader : () => fetch('http://localhost:5000/jobs')
            },
            {
                path:'/addJob',
                element: <AddJob></AddJob>
            },
            {
                path:'/appliedJobs',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: '/myJobs',
                element: <MyJobs></MyJobs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;