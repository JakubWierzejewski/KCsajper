import {Link} from "react-router-dom"
import {routes} from "../../Helpers/routes.tsx"

function Navbar() {
    return (
        <nav>
            <ul>
                {routes.filter((route) => !route.hideInMenu).map((route)=>(
                    <li key={route.path}>
                        <Link to={route.path}>{route.title}</Link> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}
//Dla każdego obiektu w routes utwórz li
export default Navbar