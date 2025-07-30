import { HttpResponse, HttpResponseResolver } from "msw";

export const getShowListHandler: HttpResponseResolver = ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') || '0');

  const mockMovies = Array.from({ length: 10 }, (_, i) => ({
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
    image: { medium: '', original: '' },
    summary: '',
    updated: Date.now(),
    _links: { self: { href: '' } },
  }));

  return HttpResponse.json(mockMovies);
};
