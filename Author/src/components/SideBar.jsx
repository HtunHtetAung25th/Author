import { Link } from "react-router-dom"
import settings from "../assets/settings.png"

export default function SideBar() {
    return (
        <section className="SideBar">
            <div className="top">
                <h1>AUTHOR</h1>
                <Link to="/">
                    <sub>by Project-23A</sub>
                </Link>
            </div>
            <div className="middle">
                <ul>
                    <Link to="/" ><li>Projects</li></Link>
                    <Link to="/Customize"><li>Customize</li></Link>
                    <Link to="/Plugin"><li>Plugin</li></Link>
                    <Link to="/Learn"><li>Learn</li></Link>
                </ul>
            </div>
            <div className="bottom">
                <img src={settings} alt="image_settings" className="image_settings" />
            </div>
        </section>
    )
}