import { useInfiniteQuery } from '@tanstack/react-query';
import { TvShow } from '../types/TvShow';
import { endpoints } from '../constants/endpoints';
import { apiRequest } from '../utils/api';


export const fetchShowsPage = async ({
  pageParam = 0,
}: { pageParam?: unknown }): Promise<TvShow[]> => {
  const page = typeof pageParam === 'number' ? pageParam : 0;
  return apiRequest<TvShow[]>(`${endpoints.showList}?page=${page}`);
};

export function useInfiniteShows() {
  return useInfiniteQuery<TvShow[]>({
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