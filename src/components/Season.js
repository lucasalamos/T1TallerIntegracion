import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Season = ({ match }) => {
  useEffect(() => {
    fetchEpisodes(match.params.id, match.params.name);
  }, []);

  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async (id, name) => {
    const res = await fetch(
      `https://tarea-1-breaking-bad.herokuapp.com/api/episodes`
    );
    const data = await res.json();
    setEpisodes(data.filter((ep) => ep.season === id && ep.series === name));
    //setEpisodes(data);
    console.log(data);
    return data;
  };

  return (
    <div className="normal">
      <h2>{match.params.name}</h2>
      <h3>Season {match.params.id}</h3>
      {episodes.map((ep) => (
        <h4>
          <Link to={`/episode/${ep.episode_id}`}>{ep.title}</Link>
        </h4>
      ))}
    </div>
  );
};

export default Season;
