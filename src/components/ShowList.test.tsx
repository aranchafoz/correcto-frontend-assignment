import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ShowList } from './ShowList';
import { TestProviders } from '../utils/testUtils';

describe('ShowList', () => {
  it('renders a list of shows and a "See more shows" button', async () => {
    render(<ShowList />, { wrapper: TestProviders });

    const cards = await screen.findAllByTestId('show-card');
    expect(cards.length).toBe(20);

    const button = screen.getByRole('button', { name: /See more shows/i });
    expect(button).toBeInTheDocument();
  });
});