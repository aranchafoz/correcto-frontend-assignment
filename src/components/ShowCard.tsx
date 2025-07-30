import { Link } from 'react-router';
import { TvShow } from '../types/TvShow';
import FavoriteButton from './FavoriteButton';

interface ShowCardProps {
  show: TvShow;
};

export function ShowCard({ show }: ShowCardProps) {
  return (
    <Link to={`/show/${show.id}`} data-testid="show-card">
      <img src={show.image?.medium} alt={show.name} className="w-full" />
      <div>
        <h2 className="font-bold mt-2">{show.name}</h2>
        <FavoriteButton showId={show.id} />
      </div>
      <p
        className="text-sm text-gray-600"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
    </Link>
  );
}
