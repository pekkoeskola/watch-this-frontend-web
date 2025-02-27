import { useState } from "react";
import { useLazySearchQuery } from "../endpoint";
import MovieSearchResultCard from "./MovieSearchResultCard";

interface SearchProps {
  groupID: number
}

const Search = ({groupID}: SearchProps) => {
  const [searchField, setSearchField] = useState("");

  const [trigger, result] = useLazySearchQuery();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    trigger(searchField);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setSearchField(e.target.value)} />
        <button type="submit">search</button>
      </form>
      {result.isSuccess && result.data.map((movie) => <MovieSearchResultCard key={movie.id} movie={movie} groupID={groupID}/>)}
    </div>
  );
};

export default Search;
