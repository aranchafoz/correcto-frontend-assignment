import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.surfaceColor};
  color: ${({ theme }) => theme.colors.accentColor};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mint600};
    background-color: ${({ theme }) => theme.colors.mint100};
  }
  
  &:focus, &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.mint600};
    outline-offset: 2px;
  }
`;
