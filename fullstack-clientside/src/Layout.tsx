import {Outlet, Link} from "react-router-dom"
import "./Layout.css"
import useWindowDimensions from "./lib/useWindowDimensions"

const Layout = () => {
    const {width, height} = useWindowDimensions();
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/grid"}>Grid</Link></li>
                    <li><Link to={"/test"}>test 404</Link></li>
                    {width}
                    x
                    {height}
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout