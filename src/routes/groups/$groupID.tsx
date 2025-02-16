import { createFileRoute } from "@tanstack/react-router";
import { useGetGroupsQuery, useGetMoviesQuery } from "../../endpoint";
import MovieCard from "../../components/MovieCard";
import { useAppSelector } from "../../hooks";

export const Route = createFileRoute("/groups/$groupID")({
  component: RouteComponent,
});

function RouteComponent() {
  const { groupID } = Route.useParams();

  const { data: movieData, isSuccess: isMovieSuccess } = useGetMoviesQuery(Number(groupID));

  const userID = useAppSelector((state) => state.auth.id);

  const {data: groupData, isSuccess: isGroupSuccess} = useGetGroupsQuery(Number(userID));

  if (isMovieSuccess && isGroupSuccess) {
    const group = groupData.find((group) => group.id === Number(groupID))
    return (
      <div className={""}>
        <h2 className={""}>{group !== undefined ? group.name : groupID}</h2>
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  return <div className={""}>{groupID}</div>;
}
