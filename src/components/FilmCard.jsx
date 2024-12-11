import { Link } from "react-router-dom"
export default function FilmCard({ film }) {
    return (
        <div className="film card">
            <div className="card-body">
                <h3>{film.title}</h3>
                <p>{film.year}</p>
                <p>Genre: {film.genre}</p>
                <p>{film.director}</p>
            </div>
        </div>
    );
}