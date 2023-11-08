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
import DetailJob from "../pages/DetailJob";
import EditJob from "../pages/EditJob";


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
                loader : () => fetch('http://job-s-hq-server-dxm4akgji-shamsul-arefins-projects.vercel.app/jobs')
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
            },
            {
                path: '/job/:id',
                element:<DetailJob></DetailJob>,
            },
            {
                path: '/editJob/:id',
                element:<EditJob></EditJob>,
            }
        ]
    },
]);

export default router;