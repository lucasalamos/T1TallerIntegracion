import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Character = ({ match }) => {
  useEffect(() => {
    fetchCharacter(match.params.name);
    fetchQuotes(match.params.name);
  }, []);

  const [character, setCharacter] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [bbappearance, setBbappearance] = useState([]);
  const [bcsappearance, setBcsappearance] = useState([]);

  const fetchCharacter = async (name) => {
    const res = await fetch(
      `https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${name}`
    );
    const data = await res.json();
    setCharacter(data[0]);
    setBbappearance(data[0].appearance);
    setBcsappearance(data[0].better_call_saul_appearance);
  };

  const fetchQuotes = async (name) => {
    const res = await fetch(
      `https://tarea-1-breaking-bad.herokuapp.com/api/quotes`
    );
    const data = await res.json();

    setQuotes(data.filter((quote) => quote.author === name));
  };

  return (
    <div className="normal">
      <h1> {character.name} </h1>
      <img src={character.img}></img>

      <h3> Occupation: {character.occupation} </h3>
      <h3> Status: {character.status} </h3>
      <h3> Nickname: {character.nickname} </h3>
      <h3> Potrayed: {character.potrayed} </h3>
      <h3> Category: {character.category} </h3>
      <h3> Quotes: </h3>
      {quotes.map((quote) => (
        <h3>"{quote.quote}"</h3>
      ))}
      <h3> Breaking Bad Appearances: </h3>
      {bbappearance.map((app) => (
        <h3>
          <Link to={`/season/Breaking%20Bad/${app}`}>Season {app}</Link>
        </h3>
      ))}
      <h3> Better Call Saul Appearances </h3>
      {bcsappearance.map((app) => (
        <h3>
          <Link to={`/season/Better%20Call%20Saul/${app}`}>Season {app}</Link>
        </h3>
      ))}
    </div>
  );
};

export default Character;
