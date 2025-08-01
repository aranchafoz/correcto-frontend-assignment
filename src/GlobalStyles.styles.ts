import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.surfaceColor};
  }

  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
    text-align: center;
  }
`;