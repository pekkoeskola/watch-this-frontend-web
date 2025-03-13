import { Movie } from "../../types";
import { useAddMovieToGroupMutation } from "../features/apiSlice";

interface MovieSearchResultCardProps {
  movie: Movie;
  groupID: number;
}

const MovieCard = ({ movie, groupID }: MovieSearchResultCardProps) => {
  const [triggerAddMovie, _result] = useAddMovieToGroupMutation();

  const addMovie = () => {
    triggerAddMovie({ tmdbID: movie.id, groupID: groupID });
  };

  return (
    <div className={"border"}>
      <img src={movie.posterURL} />
      <h3 className={"text-xl"}>{movie.title}</h3>
      <p>{movie.overview}</p>
      <button onClick={addMovie} className={"border-2"}>
        add
      </button>
    </div>
  );
};

export default MovieCard;
