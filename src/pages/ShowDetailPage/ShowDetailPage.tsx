import React from "react";
import { useNavigate, useParams } from "react-router";
import { CastMember } from "../../types/CastMember";
import useShowDetails from "../../hooks/useShowDetails";
import CastMemberCard from "../../components/CastMemberCard/CastMemberCard";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { BackButton, CastList, ContentWrapper, Details, InfoList, PageWrapper, Poster, TitleRow } from "./ShowDetailPage.styles";
import { routes } from "../../constants/routes";

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
    _embedded,
  } = data;

  const cast: CastMember[] = _embedded?.cast ?? [];

  return (
    <PageWrapper>
      <BackButton
        onClick={() => navigate(routes.home)}
      >
        ← Back to list
      </BackButton>

      <ContentWrapper>
        {image?.original && (
          <Poster
            src={image.original}
            alt={`Poster of ${name}`}
          />
        )}

        <Details>
          <TitleRow>
            <h1>{name}</h1>
            <FavoriteButton showId={Number(id)} />
          </TitleRow>

          <InfoList>
            <li><strong>Genres:</strong> {genres.join(', ') || 'N/A'}</li>
            <li><strong>Premiered:</strong> {premiered || 'N/A'}</li>
            <li><strong>Status:</strong> {status || 'N/A'}</li>
            <li><strong>Rating:</strong> {rating?.average ?? 'N/A'}</li>
            <li><strong>Runtime:</strong> {runtime ? `${runtime} min` : 'N/A'}</li>
            <li><strong>Network:</strong> {network?.name || 'N/A'}</li>
          </InfoList>

          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </Details>
      </ContentWrapper>

      <h2>Cast</h2>
      {cast.length === 0 && <p>No cast information available.</p>}
      <CastList>
        {cast.map(({ person, character }) => (
          <CastMemberCard
            key={person.id}
            member={{ person, character }}
          />
        ))}
      </CastList>
    </PageWrapper>
  );
};

export default ShowDetailPage;
