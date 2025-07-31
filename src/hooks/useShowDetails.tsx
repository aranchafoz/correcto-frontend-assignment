import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../constants/endpoints';
import { TvShow } from '../types/TvShow';
import { apiRequest } from '../utils/api';

export const fetchShowDetails = (id: number): Promise<TvShow> => {
  return apiRequest<TvShow>(endpoints.showDetails(id));
};

function useShowDetails(id: number | undefined) {
  return useQuery({
    queryKey: ['show', id],
    queryFn: () => fetchShowDetails(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export default useShowDetails;
