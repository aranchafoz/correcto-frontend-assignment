import { http } from 'msw';
import { getShowListHandler } from './shows';

export const handlers = [
  http.get('https://api.tvmaze.com/shows', getShowListHandler)
];
