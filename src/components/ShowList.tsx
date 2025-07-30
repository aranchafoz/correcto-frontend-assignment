import { useInfiniteShows } from '../hooks/useInfiniteShows';
import { useState, useMemo } from 'react';
import { ShowCard } from './ShowCard';

const VISIBLE_SHOWS_COUNT = 20;
const LOAD_MORE_SHOWS_COUNT = 10;

export function ShowList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteShows();
  const [visibleCount, setVisibleCount] = useState(VISIBLE_SHOWS_COUNT);

  const allShows = useMemo(() => {
    return data?.pages.flat() ?? [];
  }, [data]);

  const visibleShows = allShows.slice(0, visibleCount);

  const handleLoadMore = () => {
    const nextCount = visibleCount + LOAD_MORE_SHOWS_COUNT;

    if (nextCount > allShows.length && hasNextPage) {
      fetchNextPage().then(() => {
        setVisibleCount(nextCount);
      });
    } else {
      setVisibleCount(nextCount);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching shows</p>;

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {visibleShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>

      <div className="mt-6 text-center">
        {hasNextPage || visibleCount < allShows.length ? (
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'See more shows'}
          </button>
        ) : (
          <p className="text-gray-500 mt-4">There isn't more shows</p>
        )}
      </div>
    </div>
  );
}
