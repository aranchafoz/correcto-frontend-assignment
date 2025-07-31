# Movie Explorer

A React application for exploring and marking TV shows as favorites. Built with production-quality practices including component design, theming, state management, and testing.

## Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

## Technologies Used
- React – For building the UI components and views.

- TypeScript – Provides static typing to improve code quality and maintainability.

- React Router – Handles navigation between the list and detail pages.

- React Query – Manages data fetching, caching, and pagination.

- @preact/signals-react – Lightweight state management used for the favorites system, integrated with localStorage.

- Styled Components – Provides a component-scoped styling system with support for theming.

## Design System
The application uses a typed semantic theme built with styled-components.

### Theme Structure
#### Colors
primaryColor: Based on Oxford Blue – used for backgrounds and main sections.

**accentColor**: Based on Mint – used for highlights and interactive elements.

**secondaryColor**: Based on Black – used for borders or less prominent text.

**textPrimaryColor**: White – for text on dark surfaces.

**textSecondaryColor**: Platinum – for less prominent text or labels.

**surfaceColor**: Background surfaces for cards and containers.

All color combinations were selected for accessible contrast (WCAG AA/AAA where applicable).

#### Spacing
A consistent spacing scale is defined in the theme (e.g. spacing.sm, spacing.md, spacing.lg), ensuring layout consistency across components.

## Features
- Paginated show listing (initially 20 shows, load more on demand).

- Show detail view includes cast list.

- Favorite shows are persisted in localStorage and managed with signals.

- Responsive design.

- Typed theme and styled components for consistent and scalable design.

- Unit and integration tests using React Testing Library and Vitest.

## Potential Improvements
With additional time, the following enhancements could be implemented:

- End-to-end tests with Playwright

- Improve unit test coverage

- Add search functionality with debounced input.

- Optimize images using lazy loading and responsive sources.

- Introduce subtle animations with Framer Motion.