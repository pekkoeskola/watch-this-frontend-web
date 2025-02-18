import { useState } from "react";
import { useLazySearchQuery } from "../endpoint";
import MovieCard from "./MovieCard";

const Search = () => {
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
      {result.isSuccess && result.data.map((movie) => <MovieCard movie={movie}/>)}
    </div>
  );
};

export default Search;
