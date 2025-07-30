import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useInfiniteShows } from './useInfiniteShows';
import { TestProviders } from '../utils/testUtils';

describe('useInfiniteShows', () => {
  it('fetches first page of shows', async () => {
    const { result } = renderHook(() => useInfiniteShows(), { wrapper: TestProviders });

    await waitFor(() => result.current.isSuccess);

    const page = result.current.data?.pages[0];
    expect(page).toHaveLength(10);
    expect(page?.[0].name).toBe('Movie 0');
  });
});
