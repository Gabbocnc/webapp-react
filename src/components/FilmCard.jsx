import { Link } from "react-router-dom"
export default function FilmCard({ film }) {
    return (
        <div className="film card">
            <div className="card-body bg-dark text-white rounded">
                <h3>{film.title}</h3>
                <p>{film.year}</p>
                <p>Genre: {film.genre}</p>
                <p>{film.director}</p>
            </div>
        </div>
    );
}