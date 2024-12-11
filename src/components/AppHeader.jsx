import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <header className="bg-dark text-white p-3 ">
            <h1>FILMS</h1>
            <nav className="navBar ">
                <NavLink className='navPill' to="/">Home</NavLink>
            </nav>


        </header>
    )
}