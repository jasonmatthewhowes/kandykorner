import { Link, useNavigate } from "react-router-dom"
import { LocationsList } from "../LocationsList"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyuser=JSON.parse(localKandyUser)
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
                </li>    
            {kandyuser.staff ?
            <li className="navbar__item products">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            :""
            }
            {kandyuser.staff ?
            <li className="navbar__item createproducts">
                <Link className="navbar__link" to="/createproducts">Create Products</Link>
            </li>
            :""
            }
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}

