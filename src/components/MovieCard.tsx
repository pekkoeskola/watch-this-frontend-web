import { Movie } from "../../types"

interface MovieCardProps {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return(
    <div className={"border"}>
      <h3 className={"text-xl"}>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieCard