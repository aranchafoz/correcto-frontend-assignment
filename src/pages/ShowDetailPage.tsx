import React from "react";
import { useNavigate, useParams } from "react-router";
import { CastMember } from "../types/CastMember";
import useShowDetails from "../hooks/useShowDetails";
import CastMemberCard from "../components/CastMemberCard";
import FavoriteButton from "../components/FavoriteButton";

const ShowDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, error, isLoading } = useShowDetails(Number(id));

  if (isLoading) {
    return <p>Loading show details...</p>;
  }

  if (error) {
    return <p>Error loading show: {(error as Error).message}</p>;
  }

  if (!data) {
    return <p>No details found for this show.</p>;
  }

  const {
    name,
    image,
    summary,
    genres,
    premiered,
    status,
    rating,
    runtime,
    network,
    officialSite,
    _embedded,
  } = data;

  const cast: CastMember[] = _embedded?.cast ?? [];

  return (
    <div>
      <button
        onClick={() => navigate("/")}
      >
        ← Back to list
      </button>

      <div>
        <h1>{name}</h1>
        <FavoriteButton showId={Number(id)} />
      </div>

      {image?.original && (
        <img
          src={image.original}
          alt={`Poster of ${name}`}
          style={{ maxWidth: "300px", borderRadius: "8px" }}
        />
      )}

      {officialSite && (
        <p>
          <a href={officialSite} target="_blank" rel="noopener noreferrer">
            Official site
          </a>
        </p>
      )}

      <div dangerouslySetInnerHTML={{ __html: summary }} />

      <ul>
        <li>
          <strong>Genres:</strong> {genres.join(", ") || "N/A"}
        </li>
        <li>
          <strong>Premiered:</strong> {premiered || "N/A"}
        </li>
        <li>
          <strong>Status:</strong> {status || "N/A"}
        </li>
        <li>
          <strong>Rating:</strong> {rating?.average ?? "N/A"}
        </li>
        <li>
          <strong>Runtime:</strong> {runtime ? `${runtime} min` : "N/A"}
        </li>
        <li>
          <strong>Network:</strong> {network?.name || "N/A"}
        </li>
      </ul>

      <h2>Cast</h2>
      {cast.length === 0 && <p>No cast information available.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cast.map(({ person, character }) => (
          <CastMemberCard
            key={person.id}
            member={{ person, character }}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShowDetailPage;
