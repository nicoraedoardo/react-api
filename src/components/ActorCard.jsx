function ActorCard({ actor }) {
  return (
    <div className="card">
      <img src={actor.image} alt={actor.name} />

      <h2>{actor.name}</h2>

      <p>
        <strong>Anno nascita:</strong> {actor.birth_year}
      </p>
      <p>
        <strong>Nazionalità:</strong> {actor.nationality}
      </p>

      <p>{actor.biography}</p>

      <p>
        <strong>Riconoscimenti:</strong> {actor.awards}
      </p>
    </div>
  );
}

export default ActorCard;
