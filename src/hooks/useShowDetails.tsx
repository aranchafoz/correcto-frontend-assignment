import { useQuery } from '@tanstack/react-query';

function fetchShowDetails(id: number) {
  return fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`).then(res => {
    if (!res.ok) {
      throw new Error('Error fetching show details');
    }
    return res.json();
  });
}

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
