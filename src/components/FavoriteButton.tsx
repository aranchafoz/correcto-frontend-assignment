import { useState } from 'react';
import { favoriteShowIds, toggleFavorite } from '../signals/favorites';
import { useSignalEffect } from '@preact/signals-react';
import { StyledButton } from './FavoriteButton.styles';

function FavoriteButton({ showId }: { showId: number }) {
  const [isFav, setIsFav] = useState(favoriteShowIds.value.has(showId));

  useSignalEffect(() => {
    setIsFav(favoriteShowIds.value.has(showId));
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(showId);
  };

  return (
    <StyledButton
      onClick={handleClick}
      className={isFav ? 'is-favorite' : ''}
    >
      {isFav ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </StyledButton>
  );
}

export default FavoriteButton;