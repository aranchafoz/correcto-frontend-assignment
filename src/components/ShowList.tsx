import { useInfiniteShows } from '../hooks/useInfiniteShows';
import { useState, useMemo } from 'react';
import { ShowCard } from './ShowCard';
import { List, SeeMoreButton } from './ShowList.styles';

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
      <List>
        {visibleShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </List>

      <div>
        {hasNextPage || visibleCount < allShows.length ? (
          <SeeMoreButton
            onClick={handleLoadMore}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'See more shows'}
          </SeeMoreButton>
        ) : (
          <p>There isn't more shows</p>
        )}
      </div>
    </div>
  );
}
