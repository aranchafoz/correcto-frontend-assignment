import { useInfiniteQuery } from '@tanstack/react-query';
import { Movie } from '../types/Movie';

const fetchShowsPage = async ({ pageParam = 0 }: { pageParam?: unknown }): Promise<Movie[]> => {
  const page = typeof pageParam === 'number' ? pageParam : 0;
  const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
  if (!res.ok) throw new Error('Error fetching shows');
  return res.json();
};

export function useInfiniteShows() {
  return useInfiniteQuery<Movie[]>({
    queryKey: ['infinite-shows'],
    queryFn: fetchShowsPage,
    getNextPageParam: (lastPage, allPages) => {
      // If last page lenght is lower than 250, that's the last page
      return lastPage.length < 250 ? undefined : allPages.length;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
  });
}