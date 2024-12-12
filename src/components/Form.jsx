import { useState, useContext } from "react";
import { FilmContext } from "../context/FilmContext";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
    const { films } = useContext(FilmContext);

    const { id } = useParams();

    const [formData, setFormData] = useState({
        film: "",
        review: "",
        reviewer: "",
        vote: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            ...formData,
            filmId: id
        };

    };


    return (
        <div>
            <button className="btn btn-primary" type="button">
                Add Review
            </button>

            <div className="mt-3" id="reviewForm">
                <form onSubmit={handleSubmit}>

                    {/* Scegli il film */}
                    <select
                        className="form-select"
                        id="filmSelect"
                        name="film"
                        value={formData.film}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose a film...</option>
                        {films.map((film) => (
                            <option key={film.id} value={film.title}>
                                {film.title}
                            </option>
                        ))}
                    </select>

                    {/* Recensione del film */}
                    <div className="mb-3">
                        <label htmlFor="filmReview" className="form-label">
                            Film Review
                        </label>
                        <textarea
                            className="form-control"
                            id="filmReview"
                            name="review"
                            rows="3"
                            placeholder="Write your review here"
                            value={formData.review}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Nome del recensore */}
                    <div className="mb-3">
                        <label htmlFor="nameReviewers" className="form-label">
                            Name Reviewer
                        </label>
                        <textarea
                            className="form-control"
                            id="nameReviewers"
                            name="reviewer"
                            placeholder="Write your name here"
                            value={formData.reviewer}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Voto della recensione */}
                    <div className="mb-3">
                        <label htmlFor="voteReview" className="form-label">
                            Vote Review
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="voteReview"
                            name="vote"
                            placeholder="Choose a vote between 0 and 5"
                            min="0"
                            max="5"
                            step="1"
                            value={formData.vote}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Pulsante di invio */}
                    <button type="submit" className="btn btn-outline-success">
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
}
