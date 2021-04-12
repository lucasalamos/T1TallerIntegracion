import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Episode = ({ match }) => {
  useEffect(() => {
    fetchEpisode(match.params.id);
  }, []);

  const [episode, setEpisode] = useState("");
  const [characters, setCharacters] = useState([]);

  const fetchEpisode = async (id) => {
    const res = await fetch(
      `https://tarea-1-breaking-bad.herokuapp.com/api/episodes/${id}`
    );
    const data = await res.json();
    setEpisode(data[0]);
    setCharacters(data[0].characters);
  };

  return (
    <div className="normal">
      <h2>Title: {episode.title}</h2>
      <h3>Season: {episode.season}</h3>
      <h3>Episode: {episode.episode}</h3>
      <h3>Air Date: {episode.air_date}</h3>
      <h3>Series: {episode.series}</h3>
      <h3>Characters: </h3>
      {characters.map((character) => (
        <h3>
          <Link to={`/character/${character}`}>{character}</Link>
        </h3>
      ))}
    </div>
  );
};

export default Episode;
