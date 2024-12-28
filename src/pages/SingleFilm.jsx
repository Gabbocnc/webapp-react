import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { FilmContext } from "../context/FilmContext";
import FilmCard from "../components/FilmCard";
import Form from "../components/ReviewForm";

export default function SingleFilm() {

    const { id } = useParams();
    const { films } = useContext(FilmContext);
    const [review, setReview] = useState([]);

    const selectedFilm = films.find((film) => film.id === parseInt(id));

    /* chiamata per le reviews */
    useEffect(() => {
        fetch(`http://localhost:3005/films/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data.reviews);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });

    }, [id]);

    return (

        <div className="container">
            <div>
                {selectedFilm ? (
                    <FilmCard film={selectedFilm} />
                ) : (
                    <p>Film not found.</p>
                )}
            </div>

            <div className="reviews-section text-white bg-dark rounded p-3">
                <h4>Reviews:</h4>

                {review.map((review) => (
                    <ul key={review.id} className="review">
                        <li className="list-unstyled" >
                            <h4><strong>{review.name}</strong> </h4>

                        </li>
                        <li>
                            Vote: {review.vote}
                        </li>
                        <li>
                            <p>{review.text}</p>
                        </li>
                    </ul>

                ))}
                <Form />
            </div>

        </div>
    );
}
