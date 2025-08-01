import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ShowCard } from './ShowCard';
import { mockShow } from '../../mocks/data/mockShow';
import { TestProviders } from '../../utils/testUtils';

describe('<ShowCard />', () => {
  test('renders show data correctly', () => {
    render(<ShowCard show={mockShow} />, { wrapper: TestProviders });

    expect(screen.getByRole('heading', { name: /test show/i })).toBeInTheDocument();
    expect(screen.getByText(/this is a test show summary/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockShow.image?.medium);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/show/${mockShow.id}`);
  });
});
