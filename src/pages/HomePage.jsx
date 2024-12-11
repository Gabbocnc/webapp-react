import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";
import FilmCard from "../components/FilmCard";

export default function HomePage() {
    const { films } = useContext(FilmContext);

    return (
        <section>
            <div className="container">
                <div className="row">
                    {films.length > 0 ? (
                        films.map((film) => (
                            <div className="col-4 p-3" key={film.id}>
                                <FilmCard film={film} />
                            </div>
                        ))
                    ) : (
                        <p>No films available.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
