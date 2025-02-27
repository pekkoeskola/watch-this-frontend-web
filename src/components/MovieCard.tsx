import { Movie } from "../../types"

interface MovieCardProps {
  movie: Movie
  groupID: number
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return(
    <div className={"border"}>
      <img src={movie.posterURL} />
      <h3 className={"text-xl"}>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieCard