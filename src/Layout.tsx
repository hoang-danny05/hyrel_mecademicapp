import {Outlet, Link} from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/grid"}>Grid</Link></li>
                    <li><Link to={"/test"}>Not Working lmao</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout