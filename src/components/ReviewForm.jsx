import { useState, useContext } from "react";
import { FilmContext } from "../context/FilmContext";
import { useParams } from "react-router-dom";

export default function Form() {
    const { id } = useParams();
    const [isFormVisible, setIsFormVisible] = useState(false);

    const [formData, setFormData] = useState({
        review: "",
        reviewer: "",
        vote: ""
    });

    const [errors, setErrors] = useState({
        reviewer: "",
        review: "",
        vote: ""
    });


    const validateForm = () => {
        const newErrors = {};

        if (!formData.reviewer) {
            newErrors.reviewer = "Please enter your name.";
        } else if (formData.reviewer.length < 3) {
            newErrors.reviewer = "Name must be at least 3 characters long.";
        }

        if (!formData.review) {
            newErrors.review = "Please enter a review.";
        } else if (formData.review.length < 10) {
            newErrors.review = "Review must be at least 10 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

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
                window.location.reload();
            })

    };


    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                type="button"
                onClick={() => setIsFormVisible(!isFormVisible)}
            >
                Add Review
            </button>

            {isFormVisible && (
                <div className="mt-3" id="reviewForm">
                    <form onSubmit={handleSubmit}>

                        {/* Nome del recensore */}
                        <div className="mb-3">
                            <label htmlFor="nameReviewers" className="form-label">
                                Name Reviewer
                            </label>
                            <input
                                className={`form-control ${errors.reviewer ? "is-invalid" : ""}`}
                                id="nameReviewers"
                                name="reviewer"
                                placeholder="Write your name here"
                                value={formData.reviewer}
                                onChange={handleChange}
                            />
                            {errors.reviewer && <div className="invalid-feedback">{errors.reviewer}</div>}
                        </div>

                        {/* Recensione del film */}
                        <div className="mb-3">
                            <label htmlFor="filmReview" className="form-label">
                                Film Review
                            </label>
                            <textarea
                                className={`form-control ${errors.review ? "is-invalid" : ""}`}
                                id="filmReview"
                                name="review"
                                rows="3"
                                placeholder="Write your review here"
                                value={formData.review}
                                onChange={handleChange}
                            ></textarea>
                            {errors.review && <div className="invalid-feedback">{errors.review}</div>}
                        </div>

                        {/* Voto della recensione */}
                        <div className="mb-3">
                            <label htmlFor="voteReview" className="form-label">
                                Vote Review
                            </label>
                            <input
                                type="number"
                                className={`form-control ${errors.vote ? "is-invalid" : ""}`}
                                id="voteReview"
                                name="vote"
                                placeholder="Choose a vote between 0 and 5"
                                min="0"
                                max="5"
                                step="1"
                                value={formData.vote}
                                onChange={handleChange}
                            />
                            {errors.vote && <div className="invalid-feedback">{errors.vote}</div>}
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
