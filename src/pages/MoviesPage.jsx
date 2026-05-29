import { useState } from "react";
import { movies as initialMovies } from "../utils/movies";

function MoviesPage() {

    const [movieList, setMovieList] =
        useState(initialMovies);

    const [title, setTitle] =
        useState("");

    const [director, setDirector] =
        useState("");

    const [genre, setGenre] =
        useState("");

    const [watched, setWatched] =
        useState(false);

    const addMovie = (e) => {
        e.preventDefault();

        if (
            !title.trim() ||
            !director.trim()
        ) {
            alert(
                "Title and Director required"
            );

            return;
        }

        const newMovie = {
            id: Date.now(),
            title,
            director,
            genre,
            watched,
        };

        setMovieList([
            ...movieList,
            newMovie,
        ]);

        setTitle("");
        setDirector("");
        setGenre("");
        setWatched(false);
    };

    return (
        <div className="p-8">

            <h1 className="text-3xl mb-6">
                Movies
            </h1>

            <form
                onSubmit={addMovie}
                className="flex flex-col gap-3 mb-8"
            >

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <input
                    placeholder="Director"
                    value={director}
                    onChange={(e) =>
                        setDirector(e.target.value)
                    }
                />

                <input
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) =>
                        setGenre(e.target.value)
                    }
                />

                <label>

                    <input
                        type="checkbox"
                        checked={watched}
                        onChange={(e) =>
                            setWatched(
                                e.target.checked
                            )
                        }
                    />

                    Watched

                </label>

                <button>
                    Add Movie
                </button>

            </form>

            {movieList.map((movie) => (

                <div
                    key={movie.id}
                    className="border p-4 mb-4"
                >

                    <h2>{movie.title}</h2>

                    <p>
                        Director:
                        {" "}
                        {movie.director}
                    </p>

                    <p>
                        Genre:
                        {" "}
                        {movie.genre}
                    </p>

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