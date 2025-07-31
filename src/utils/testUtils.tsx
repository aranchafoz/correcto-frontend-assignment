import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { theme } from '../constants/theme.ts';
import { ThemeProvider } from 'styled-components';

export function TestProviders({ children }: { children: ReactNode }) {

  const queryClient = new QueryClient();

  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>
  );
}