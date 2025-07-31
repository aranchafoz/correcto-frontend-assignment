import styled from 'styled-components';
import { Link } from 'react-router';

export const ShowCardLink = styled(Link)`
  display: flex;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surfaceColor};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.oxfordBlue600};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ShowCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ShowCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimaryColor};
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;
`;

export const ShowCardDescription = styled.p`
  color: ${({ theme }) => theme.colors.platinum400};
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  text-align: start;
`;

export const ShowImage = styled.img`
  border-radius: 8px;
  width: 120px;
  height: auto;
  object-fit: cover;
`;