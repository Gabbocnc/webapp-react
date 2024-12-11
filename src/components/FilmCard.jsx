import { NavLink } from "react-router-dom";

export default function FilmCard({ film }) {
    return (
        <div className="film card">
            <div className="card-body bg-dark text-white rounded">
                <h3>
                    <NavLink to={`/films/${film.id}`} className="text-white ">
                        {film.title}
                    </NavLink>
                </h3>
                <p>{film.release_year}</p>
                <p>Genre: {film.genre}</p>
                <p>{film.director}</p>
                <p>{film.abstract}</p>
            </div>

        </div>
    );
}
