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
import PrivateRoute from "../auth/PrivateRoute";


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
                loader : () => fetch('https://job-s-hq-server.vercel.app/jobs')
            },
            {
                path:'/addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'/appliedJobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: '/myJobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
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