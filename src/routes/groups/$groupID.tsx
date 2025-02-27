import { createFileRoute } from "@tanstack/react-router";
import { useGetGroupsQuery, useGetMoviesQuery } from "../../endpoint";
import MovieCard from "../../components/MovieCard";
import { useAppSelector } from "../../hooks";
import Search from "../../components/Search";

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
    if(group){
      return (
        <div className={""}>
          <h2 className={""}>{group.name}</h2>
          {movieData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} groupID={group.id} />
          ))}
          <Search groupID={group.id}/>
        </div>
      );
    }
    return <div className={""}>{groupID}</div>;
  }

  return <div className={""}>{groupID}</div>;
}
