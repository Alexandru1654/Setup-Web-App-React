import { Link } from "react-router-dom";

function Home() {
    const movies = [
        { id: 1, title: "Movie 1", description: "Description of Movie 1" },
        { id: 2, title: "Movie 2", description: "Description of Movie 2" },
    ];

    return (
        <div>
            <h1>Lista dei Film</h1>
            <div className="list-group">
                {movies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}  
                        className="list-group-item list-group-item-action"
                    >
                        {movie.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
