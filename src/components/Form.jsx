import { useState, useContext } from "react";
import { FilmContext } from "../context/FilmContext";
import { useParams } from "react-router-dom";

export default function Form() {
    const { films } = useContext(FilmContext);
    const { id } = useParams();
    const [isFormVisible, setIsFormVisible] = useState(false);

    const [formData, setFormData] = useState({
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
            reviewer: formData.reviewer,
            review: formData.review,
            vote: formData.vote
        };

        fetch(`http://localhost:3005/films/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
            .then((response) => {
                console.log('errore nella richiesta');

                return response.json();
            })
            .then((data) => {
                console.log("review :", data);
            })

    };
    return (
        <div>
            {/* Pill button to toggle the form visibility */}
            <button
                className="btn btn-primary mb-3"
                type="button"
                onClick={() => setIsFormVisible(!isFormVisible)}
            >
                Add Review
            </button>

            {/* Show the form when isFormVisible is true */}
            {isFormVisible && (
                <div className="mt-3" id="reviewForm">
                    <form onSubmit={handleSubmit}>
                        {/* Nome del recensore */}
                        <div className="mb-3">
                            <label htmlFor="nameReviewers" className="form-label">
                                Name Reviewer
                            </label>
                            <input
                                className="form-control"
                                id="nameReviewers"
                                name="reviewer"
                                placeholder="Write your name here"
                                value={formData.reviewer}
                                onChange={handleChange}
                                required
                            />
                        </div>

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
            )}
        </div>
    );
}
