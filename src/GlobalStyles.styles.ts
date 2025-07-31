import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.surfaceColor};
  }

  h1 {
    color: ${({ theme }) => theme.colors.textPrimaryColor};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;