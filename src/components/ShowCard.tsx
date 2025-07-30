import { Link } from 'react-router';
import { TvShow } from '../types/TvShow';

interface ShowCardProps {
  show: TvShow;
};

export function ShowCard({ show }: ShowCardProps) {
  return (
    <Link to={`/show/${show.id}`} data-testid="show-card" className="block p-4 border rounded shadow hover:shadow-lg transition">
      <img src={show.image?.medium} alt={show.name} className="w-full" />
      <h2 className="font-bold mt-2">{show.name}</h2>
      <p
        className="text-sm text-gray-600"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
    </Link>
  );
}
