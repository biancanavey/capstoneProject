import './nav.css'
import { Link } from "react-router-dom";

function Nav() { 
    return (
        <div class="navbar">
            <ul>
                <li><Link to="./">♞ DontBeBoard.</Link></li>
                <li><Link to="./">New Search</Link></li>
                <li><Link to="./games">View All</Link></li>
                <li><Link to="./about">About</Link></li>
            </ul>
        </div>
    )
}

export default Nav;