import { TvShow } from "../../types/TvShow";

export const mockShow: TvShow = {
  id: 123,
  url: 'https://example.com/show/123',
  name: 'Test Show',
  type: 'Scripted',
  language: 'English',
  genres: ['Drama'],
  status: 'Running',
  runtime: 60,
  averageRuntime: 60,
  premiered: '2020-01-01',
  ended: '',
  officialSite: 'https://example.com',
  schedule: {
    time: '20:00',
    days: ['Monday'],
  },
  rating: {
    average: 8.5,
  },
  weight: 100,
  network: {
    id: 1,
    name: 'Test Network',
    country: {
      name: 'USA',
      code: 'US',
      timezone: 'America/New_York',
    },
    officialSite: 'https://testnetwork.com',
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: 12345,
    thetvdb: 54321,
    imdb: 'tt1234567',
  },
  image: {
    medium: 'https://via.placeholder.com/150',
    original: 'https://via.placeholder.com/300',
  },
  summary: '<p>This is a test show summary</p>',
  updated: 1234567890,
  _links: {
    self: { href: 'https://api.tvmaze.com/shows/123' },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/456',
      name: 'Last Episode',
    },
  },
};