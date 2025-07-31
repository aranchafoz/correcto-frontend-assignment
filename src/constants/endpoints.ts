export const BASE_API_URL = 'https://api.tvmaze.com/';

export const endpoints = {
  showList: 'shows',
  showDetails: (id: number) => `shows/${id}?embed=cast`
} as const;