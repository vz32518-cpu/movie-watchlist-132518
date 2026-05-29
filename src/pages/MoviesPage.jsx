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

        if (!title.trim() || !director.trim()) {
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

    const toggleWatched = (id) => {

        setMovieList(

            movieList.map((movie) =>

                movie.id === id
                    ? {
                        ...movie,
                        watched:
                            !movie.watched,
                    }
                    : movie

            )

        );

    };

    const deleteMovie = (id) => {

        setMovieList(

            movieList.filter(

                (movie) =>
                    movie.id !== id

            )

        );

    };

    return (

        <div className="min-h-screen bg-slate-100 py-10">

            <div className="max-w-5xl mx-auto px-6">

                <h1 className="text-4xl font-bold mb-8 text-slate-800">
                    Movie Watchlist
                </h1>

                <div className="bg-white p-6 rounded-xl shadow-md mb-10">

                    <h2 className="text-xl font-semibold mb-5">
                        Add New Movie
                    </h2>

                    <form
                        onSubmit={addMovie}
                        className="grid md:grid-cols-2 gap-4"
                    >

                        <input
                            className="border p-3 rounded-lg"
                            placeholder="Movie Title"
                            value={title}
                            onChange={(e) =>
                                setTitle(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            className="border p-3 rounded-lg"
                            placeholder="Director"
                            value={director}
                            onChange={(e) =>
                                setDirector(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            className="border p-3 rounded-lg"
                            placeholder="Genre"
                            value={genre}
                            onChange={(e) =>
                                setGenre(
                                    e.target.value
                                )
                            }
                        />

                        <label className="flex items-center gap-3">

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

                        <button
                            className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                            Add Movie
                        </button>

                    </form>

                </div>

                <div className="grid gap-5">

                    {movieList.map((movie) => (

                        <div
                            key={movie.id}
                            className="bg-white rounded-xl shadow-md p-6"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        {movie.title}
                                    </h2>

                                    <p className="mt-2">
                                        Director:
                                        {" "}
                                        {movie.director}
                                    </p>

                                    <p>
                                        Genre:
                                        {" "}
                                        {movie.genre}
                                    </p>

                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm h-fit ${
                                        movie.watched
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >

                  {movie.watched
                      ? "Watched"
                      : "Not Watched"}

                </span>

                            </div>

                            <div className="flex gap-3 mt-6">

                                <button
                                    onClick={() =>
                                        toggleWatched(
                                            movie.id
                                        )
                                    }
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Toggle Status
                                </button>

                                <button
                                    onClick={() =>
                                        deleteMovie(
                                            movie.id
                                        )
                                    }
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default MoviesPage;