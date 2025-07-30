import { CastMember } from "../../types/CastMember";

export const mockMember: CastMember = {
    person: {
      id: 1,
      name: 'John Doe',
      image: {
        medium: 'https://example.com/john.jpg',
        original: 'https://example.com/john-large.jpg',
      },
    },
    character: {
      id: 2,
      name: 'Hero Man',
      image: {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/3.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/0/3.jpg"
      },
    },
  };