import { CastMember } from "./CastMember";

export interface TvShow {
  id: number;
  name: string;
  url: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string | null;
  } | null;
  webChannel: object | null;
  dvdCountry: object | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
      name: string;
    };
  };
  _embedded?: {
    cast: CastMember[];
  };
}
