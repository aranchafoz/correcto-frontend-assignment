import { AppTheme } from "../types/AppTheme";

const colors = {
  // Mint (Accent)
  mint100: '#05251d',
  mint200: '#094a3a',
  mint300: '#0e7057',
  mint400: '#129574',
  mint500: '#17b890',
  mint600: '#29e5b6',
  mint700: '#5eebc8',
  mint800: '#94f2da',
  mint900: '#c9f8ed',

  // Oxford Blue (Primary)
  oxfordBlue100: '#04070c',
  oxfordBlue200: '#080d19',
  oxfordBlue300: '#0c1425',
  oxfordBlue400: '#101b31',
  oxfordBlue500: '#14213d',
  oxfordBlue600: '#29447e',
  oxfordBlue700: '#3e67bf',
  oxfordBlue800: '#7e99d5',
  oxfordBlue900: '#beccea',

  // Black (Secondary)
  black100: '#000000',
  black200: '#000000',
  black300: '#000000',
  black400: '#000000',
  black500: '#000000',
  black600: '#333333',
  black700: '#666666',
  black800: '#999999',
  black900: '#cccccc',

  // White (Text / Invert)
  white100: '#333333',
  white200: '#666666',
  white300: '#999999',
  white400: '#cccccc',
  white500: '#ffffff',
  white600: '#ffffff',
  white700: '#ffffff',
  white800: '#ffffff',
  white900: '#ffffff',

  // Platinum (Text Secondary)
  platinum100: '#2e2e2e',
  platinum200: '#5c5c5c',
  platinum300: '#8a8a8a',
  platinum400: '#b8b8b8',
  platinum500: '#e5e5e5',
  platinum600: '#ebebeb',
  platinum700: '#f0f0f0',
  platinum800: '#f5f5f5',
  platinum900: '#fafafa',
};

export const theme: AppTheme = {
  colors: {
    // Base colors
    ...colors,

    // Semantic colors
    accentColor: colors.mint500,
    accentHover: colors.mint600,

    primaryColor: colors.oxfordBlue500,
    primaryHover: colors.oxfordBlue600,
    secondaryColor: colors.black600,
    invertColor: colors.white900,

    surfaceColor: colors.oxfordBlue400,

    textPrimaryColor: colors.white500,
    textSecondaryColor: colors.platinum400,
  },
  

  // Spacing
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',   // 48px
    xxxl: '4rem',   // 64px
  },
};