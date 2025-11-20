import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import GameLibrary from "../Pages/GameLibrary/GameLibrary";
import GameDetails from "../Pages/GameDetails/GameDetails";
import MyProfile from "../Pages/MyProfile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpadteProfile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import ForgetPass from "../Pages/Login/ForgetPassword/ForgetPass";
import Developer from "../Pages/Developers/Developers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <NotFound></NotFound>,
        children: [
            { 
                path: "/", 
                element: <Home></Home> 
            },
            { 
                path: "/about", 
                element: <About></About> 
            },
            { 
                path: "/contact", 
                element: <Contact></Contact> 
            },
            { 
                path: "/games",
                element: <GameLibrary></GameLibrary> 
            },
            { 
                path: "/game-details/:id", 
                element: <ProtectedRoute><GameDetails></GameDetails></ProtectedRoute>
            },
            { 
                path: "/login", 
                element: <PublicRoute><Login></Login></PublicRoute> 
            },
            { 
                path: "/register", 
                element: <PublicRoute><Register></Register></PublicRoute> 
            },
            { 
                path: "/my-profile", 
                element: <ProtectedRoute><MyProfile></MyProfile></ProtectedRoute>
            },
            { 
                path: "/update-profile",
                element: <ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>
            },
            { 
                path: "/forget-password", 
                element: <PublicRoute><ForgetPass></ForgetPass></PublicRoute>
            },
            { 
                path: "/developers", 
                element: <Developer></Developer>
            }

        ]
    }
])