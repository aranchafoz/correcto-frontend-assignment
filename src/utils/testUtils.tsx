import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

export function TestProviders({ children }: { children: ReactNode }) {

  const queryClient = new QueryClient();

  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </MemoryRouter>
  );
}