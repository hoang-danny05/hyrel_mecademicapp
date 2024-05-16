import {Outlet, Link} from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/grid"}>Grid</Link></li>
                    <li><Link to={"/test"}>test 404</Link></li>
                    {window.innerWidth}
                    x
                    {window.innerHeight}
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout