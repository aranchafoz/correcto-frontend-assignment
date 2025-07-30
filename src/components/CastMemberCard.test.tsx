import { render, screen } from '@testing-library/react';
import CastMemberCard from './CastMemberCard';
import { describe, it, expect } from 'vitest';
import { mockMember } from '../mocks/data/mockCastMember';

describe('CastMemberCard', () => {
  it('renders the cast member name and character', () => {
    render(<CastMemberCard member={mockMember} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText(/as Hero Man/)).toBeInTheDocument();
  });

  it('renders the image if available', () => {
    render(<CastMemberCard member={mockMember} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockMember.person.image!.medium);
    expect(img).toHaveAttribute('alt', mockMember.person.name);
  });

  it('does not break if no image is provided', () => {
    const noImageMember = {
      ...mockMember,
      person: {
        ...mockMember.person,
        image: undefined,
      },
    };
    render(<CastMemberCard member={noImageMember} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
