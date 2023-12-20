import React from "react"
import Homepage from "../pages/Homepage"
import About from "../pages/About"

interface RouteElement{
    path : string
    element: React.JSX.Element
    title: string
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
    }
]