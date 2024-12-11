import { useParams } from "react-router-dom";

function MovieDetail() {
    const { id } = useParams();
    const movies = [
        { id: 1, title: "Movie 1", description: "Description of Movie 1", year: 2021, director: "Director 1" },
        { id: 2, title: "Movie 2", description: "Description of Movie 2", year: 2022, director: "Director 2" },
    ];

    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <div>Film non trovato</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p><strong>Anno:</strong> {movie.year}</p>
            <p><strong>Descrizione:</strong> {movie.description}</p>
            <p><strong>Direttore:</strong> {movie.director}</p>
        </div>
    );
}

export default MovieDetail;

