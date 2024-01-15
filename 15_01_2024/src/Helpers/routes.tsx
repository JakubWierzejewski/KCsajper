import React from "react"
import Homepage from "../pages/Homepage"
import About from "../pages/About"
import Blog from "../pages/Blog"
import BlogPost from "../pages/BlogPost"

interface RouteElement{
    path : string
    element: React.JSX.Element
    title: string
    hideInMenu? : boolean
}

//export const routes:RouteElement[] = []

export const routes: Array<RouteElement> = [ //tablica zawiera elementy typu RouteElement z interfejsu
    {
        path: "/",
        element: <Homepage/>,
        title: "Homepage"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About us"
    },
    {
        path: "/blog",
        element: <Blog/>,
        title: "Blog"
    },
    {
        path: "/blog/:id",
        element: <BlogPost />,
        title: "Blog post",
        hideInMenu: true
    }
]