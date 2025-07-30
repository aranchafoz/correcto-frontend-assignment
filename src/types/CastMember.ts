export interface CastMember {
  person: {
    id: number;
    name: string;
    image?: {
      medium: string;
      original: string;
    };
  };
  character: {
    id: number;
    name: string;
    image?: {
      medium: string;
      original: string;
    };
  };
}