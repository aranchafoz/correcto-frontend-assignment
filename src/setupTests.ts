import { beforeAll, afterAll, afterEach } from 'vitest';
import { server } from './mocks/server';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { cleanup } from '@testing-library/react';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());