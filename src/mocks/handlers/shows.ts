import { HttpResponse, HttpResponseResolver } from "msw";

export const getShowListHandler: HttpResponseResolver = ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') || '0');

  const mockMovies = Array.from({ length: 21 }, (_, i) => ({
    id: page * 10 + i,
    name: `Movie ${page * 10 + i}`,
    url: '',
    type: '',
    language: '',
    genres: [],
    status: '',
    runtime: 0,
    averageRuntime: 0,
    premiered: '',
    ended: '',
    officialSite: null,
    schedule: { time: '', days: [] },
    rating: { average: null },
    weight: 0,
    network: null,
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: null, imdb: null },
    image: {
      medium: 'https://via.placeholder.com/150',
      original: 'https://via.placeholder.com/300',
    },
    summary: '',
    updated: Date.now(),
    _links: { self: { href: '' } },
  }));

  return HttpResponse.json(mockMovies);
};
