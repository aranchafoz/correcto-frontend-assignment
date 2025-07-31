import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.surfaceColor};
  }

  h1 {
    color: ${({ theme }) => theme.colors.textPrimaryColor};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;