import { useEffect, useState } from "react";
import ActorCard from "./components/ActorCard";
import "./App.css";

function App() {
  const [actors, setActors] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        return response.json();
      })
      .then((data) => {
        setActors(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h1>Lista Attori</h1>

      {error && <p>{error}</p>}

      <div className="container">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  );
}

export default App;
