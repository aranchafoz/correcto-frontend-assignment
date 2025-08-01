import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimaryColor};
  background: ${({ theme }) => theme.colors.surfaceColor};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accentColor};
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover {
    text-decoration: underline;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  flex-wrap: wrap;
`;

export const Poster = styled.img`
  max-width: 300px;
  border-radius: 8px;
  flex-shrink: 0;
  object-fit: cover;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  text-align: start;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  justify-items: start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CastList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.md} 0;
  list-style: none;
  margin: 0;
`;