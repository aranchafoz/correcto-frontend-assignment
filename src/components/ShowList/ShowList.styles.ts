import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SeeMoreButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.invertColor};
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.mint600};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mint200};
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:focus,
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.mint600};
    outline-offset: 2px;
  }
`;