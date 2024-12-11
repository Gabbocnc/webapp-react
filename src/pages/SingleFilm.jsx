import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";
import FilmCard from "../components/FilmCard";

export default function SingleFilm() {
    const { id } = useParams();
    const { films } = useContext(FilmContext);

    const selectedFilm = films.find((film) => film.id === parseInt(id));

    return (
        <div>
            {selectedFilm ? (
                <FilmCard film={selectedFilm} />
            ) : (
                <p>Film not found.</p>
            )}
        </div>
    );
}
