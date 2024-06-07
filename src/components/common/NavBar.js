import { NavLink } from "react-router-dom";

export default function NavBar() {
    const actionStyle = {
        color: "Red",
    };

    return(
        <nav className="navbar navbar-light bg-light">
            <NavLink exact='true' actionstyle={actionStyle} to="/">Home</NavLink>
            <NavLink actionstyle={actionStyle} to="/posts">Posts</NavLink>
        </nav>
    );
}