import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [chars, setChars] = useState([]);
  return (
    <div className="searchBox">
      <h3> Search for character..</h3>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          if (e.target.value !== "") {
            const res = await fetch(
              `https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${e.target.value}`
            );
            const data = await res.json();
            setChars(data);
          } else {
            setChars([]);
          }
        }}
      />
      {chars.map((c) => (
        <h3>
          <Link to={`/character/${c.name}`}>{c.name}</Link>
        </h3>
      ))}
    </div>
  );
};

export default Search;
