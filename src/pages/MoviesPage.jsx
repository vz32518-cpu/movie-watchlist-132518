import { useState } from "react";
import { movies as initialMovies } from "../utils/movies";

function MoviesPage() {

    const [movieList] = useState(initialMovies);

    return (
        <div className="p-8">

            <h1 className="text-3xl font-bold mb-6">
                Movies
            </h1>

            {movieList.map((movie) => (

                <div
                    key={movie.id}
                    className="border p-4 mb-4 rounded"
                >

                    <h2>{movie.title}</h2>

                    <p>Director: {movie.director}</p>

                    <p>Genre: {movie.genre}</p>

                    <p>
                        {movie.watched
                            ? "Watched"
                            : "Not Watched"}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default MoviesPage;