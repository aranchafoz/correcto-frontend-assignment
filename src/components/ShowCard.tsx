import { routes } from '../constants/routes';
import { TvShow } from '../types/TvShow';
import FavoriteButton from './FavoriteButton';
import { ShowCardContent, ShowCardDescription, ShowCardHeader, ShowCardLink, ShowCardTitle, ShowImage } from './ShowCard.styles';

interface ShowCardProps {
  show: TvShow;
};

export function ShowCard({ show }: ShowCardProps) {
  return (
    <ShowCardLink to={routes.showDetails(show.id)} data-testid="show-card">
      <ShowImage src={show.image?.medium} alt={show.name} />
      <ShowCardContent>
        <ShowCardHeader>
          <ShowCardTitle>{show.name}</ShowCardTitle>
          <FavoriteButton showId={show.id} />
        </ShowCardHeader>
        <ShowCardDescription dangerouslySetInnerHTML={{ __html: show.summary }} />
      </ShowCardContent>
    </ShowCardLink>
  );
}
