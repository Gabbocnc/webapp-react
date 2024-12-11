import { useParams } from "react-router-dom";
import FilmCard from "../components/FilmCard";

export default function SingleFilm() {
    const { id } = useParams();


    const films = [
        {
            id: 1,
            title: "Inception",
            year: 2010,
            genre: "Sci-Fi",
            director: "Christopher Nolan",
        },
        {
            id: 2,
            title: "The Godfather",
            year: 1972,
            genre: "Crime, Drama",
            director: "Francis Ford Coppola",
        },
        {
            id: 3,
            title: "The Dark Knight",
            year: 2008,
            genre: "Action",
            director: "Christopher Nolan"
        },
        {
            id: 4,
            title: "Pulp Fiction",
            year: 1994,
            genre: "Crime",
            director: "Quentin Tarantino"
        },
        {
            id: 5,
            title: "Forrest Gump",
            year: 1994,
            genre: "Drama",
            director: "Robert Zemeckis"
        },
        {
            id: 6,
            title: "Deadpool",
            year: 2016,
            genre: "Action",
            director: "Tim Miller"
        },
    ];

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
