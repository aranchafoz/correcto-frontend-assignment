import { BASE_API_URL } from "../constants/endpoints";

export async function apiRequest<T>(endpoint: string): Promise<T> {
  const url = `${BASE_API_URL}${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching: ${res.status} ${res.statusText}`);
  }
  return res.json();
}