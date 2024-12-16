import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function ReviewForm({ movieId }) {
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('http://localhost:5000/api/reviews/add', {
                movieId,
                author,
                rating,
                review
            });

            alert('Recensione inviata con successo');
            setAuthor('');
            setRating(1);
            setReview('');
        } catch (error) {
            console.error("Errore nell'invio della recensione:", error);
            alert('Errore nell\'invio della recensione');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Autore</label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="rating" className="form-label">Valutazione</label>
                <select
                    className="form-select"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    {[1, 2, 3, 4, 5].map((val) => (
                        <option key={val} value={val}>{val}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="review" className="form-label">Recensione</label>
                <textarea
                    className="form-control"
                    id="review"
                    rows="3"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Inviando...' : 'Invia Recensione'}
            </button>
        </form>
    );
}

ReviewForm.propTypes = {
    movieId: PropTypes.number.isRequired
};

export default ReviewForm;


