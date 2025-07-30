import { signal } from '@preact/signals-react';

const LOCAL_STORAGE_KEY = 'favoriteShowIds';

const initialFavorites: Set<number> = (() => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set<number>();
  } catch {
    return new Set<number>();
  }
})();

export const favoriteShowIds = signal<Set<number>>(initialFavorites);

favoriteShowIds.subscribe((set) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...set]));
});

export function addFavorite(id: number) {
  favoriteShowIds.value = new Set(favoriteShowIds.value).add(id);
}

export function removeFavorite(id: number) {
  const newSet = new Set(favoriteShowIds.value);
  newSet.delete(id);
  favoriteShowIds.value = newSet;
}

export function toggleFavorite(id: number) {
  const current = new Set(favoriteShowIds.value);
  if (current.has(id)) {
    current.delete(id);
  } else {
    current.add(id);
  }
  favoriteShowIds.value = current;
}

export function isFavorite(id: number) {
  return favoriteShowIds.value.has(id);
}
