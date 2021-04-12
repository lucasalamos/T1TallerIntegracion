import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Serie = ({ name }) => {
  useEffect(() => {
    fetchSeasons(name);
  }, []);

  const [seasons, setSeasons] = useState([]);

  const fetchSeasons = async (name) => {
    const res = await fetch(
      `https://tarea-1-breaking-bad.herokuapp.com/api/episodes`
    );
    const data = await res.json();
    const episodes_filter = data.filter((episode) => episode.series === name);
    const seasons_id = new Set(episodes_filter.map((ep) => ep.season));
    setSeasons(Array.from(seasons_id));
  };

  return (
    <div className="normal">
      <h1> {name} </h1>
      {seasons.map((season_id) => (
        <h2>
          <Link to={`/season/${name}/${season_id}`}>Season {season_id}</Link>
        </h2>
      ))}
    </div>
  );
};

export default Serie;
