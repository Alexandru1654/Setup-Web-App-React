import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import axios from 'axios';
import { useLoader } from "../context/LoaderContext";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        const fetchMovieData = async () => {
            showLoader();

            try {
                const movieResponse = await axios.get(`http://localhost:5000/api/movies/${id}`);
                const reviewsResponse = await axios.get(`http://localhost:5000/api/reviews/${id}`);

                setMovie(movieResponse.data);
                setReviews(reviewsResponse.data);
            } catch (error) {
                console.error('Errore nel recuperare i dati', error);
            } finally {
                hideLoader();
            }
        };

        fetchMovieData();
    }, [id, showLoader, hideLoader]);

    if (!movie) {
        return <div>Film non trovato</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p><strong>Anno:</strong> {movie.year}</p>
            <p><strong>Descrizione:</strong> {movie.description}</p>
            <p><strong>Direttore:</strong> {movie.director}</p>

            <h2>Recensioni</h2>
            <div className="list-group">
                {reviews.map((review) => (
                    <div key={review._id} className="list-group-item">
                        <strong>{review.author}</strong> - {review.rating}⭐
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>

            <ReviewForm movieId={movie.id} />
        </div>
    );
}

export default MovieDetail;
