import { useState } from "react";
import MovieCard from "../components/MovieCard"


function Home() {

    const [SearchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Star Wars", release_date: "1972" },
        { id: 3, title: "Terminator", release_date: "2000" },
        { id: 4, title: "John Wick 4", release_date: "2024" },

    ]

    const handleSearch = (e) => {
        e.preventDefault()

    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input input="text" value={SearchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid" >
                {movies.map(
                    (movie) => 
                        (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
    );
}

export default Home