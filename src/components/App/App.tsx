import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import fetchMovies from "../../services/movieService";
import type { Movie } from "../../types/Movie";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);  
    
    async function handleSearch(query: string) {
        setMovies([]);
        setError(null);
        setIsLoading(true);

        try {
            const result = await fetchMovies(query);
            if (result.length === 0) {
                toast.error("No movies found for your request.");
            }
            setMovies(result);
        }
        catch {
            setError("Something went wrong. Please try again.");
        }
        finally {
            setIsLoading(false);
        }
    }
    function handleSelect(movie: Movie) {
        toast.success(movie.title);
    }
    return (
        <>
            <Toaster position="top-right" />
            <SearchBar onSubmit={handleSearch} />
            <main>
                {isLoading && <p>Loading movies...</p>}
                {error && <p>{error}</p>}
                {movies.length > 0 && (
                    <MovieGrid movies={movies} onSelect={handleSelect} />
                )}
            </main>
        </>
    )
}
export default App;