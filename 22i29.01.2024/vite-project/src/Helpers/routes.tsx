import React from "react"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"

interface RouteElement{
    path : string
    element: React.JSX.Element
    title: string
}


export const routes: Array<RouteElement> = [ 
    {
        path: "/",
        element: <Home/>,
        title: "Homepage"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About us"
    },
    {
        path: "/contact",
        element: <Contact/>,
        title: "Contact"
    }
]