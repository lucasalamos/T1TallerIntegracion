import Serie from "./Serie";
import { useEffect, useState } from "react";

const Principal = () => {
  useEffect(() => {
    fetchSeries();
  }, []);

  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
    const res = await fetch(
      `https://tarea-1-breaking-bad.herokuapp.com/api/episodes`
    );
    const data = await res.json();
    const series = new Set(data.map((episode) => episode.series));
    setSeries(Array.from(series));
  };

  return (
    <div className="normal">
      {series.map((serie) => (
        <Serie name={serie} />
      ))}
    </div>
  );
};

export default Principal;
