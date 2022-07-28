import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {Navigate} from "react-router-dom";
import Error from "../pages/Error";
import Login from "../pages/Login_";

export const privateRoutes =[

    {path: '/about', element: <About/>, exact: 'true'},
    {path: '/posts', element: <Posts/>, exact: 'true'},
    {path: '/posts/:id', element: <PostIdPage/>, exact: 'true'},
    {path: '/', element: <Posts/>, exact: 'true'},
    {path: '/error', element: <Error/>, exact: 'true'},
    {path: '/login', element: <Navigate replace to='/posts/'/>, exact: 'false'},
    {path: '*', element: <Navigate replace to='/error/'/>, exact: 'false'}

]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: 'true'},
    {path: '*', element: <Navigate replace to='/login/'/>, exact: 'false'}
]
