import { NavLink } from "react-router";

function NavBar() {
    return(
        <nav className="nav_bar">
            <NavLink className="tab" to="/">INICIO</NavLink>
            <NavLink className="tab" to="/lara-croft">LARA CROFT</NavLink>
            <NavLink className="tab" to="/el-juego">EL JUEGO</NavLink>
            <NavLink className="tab" to="/galeria">GALERÍA</NavLink>
            <NavLink className="tab" to="/sobre-mi">SOBRE MÍ</NavLink>
        </nav>
    )
}

export default NavBar;