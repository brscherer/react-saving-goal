import styled from 'styled-components';

import { colors } from '@/styles/global';

export const Header = styled.header`
  padding: 16px;
  background: ${colors.white};
`;

export const Main = styled.main`
  min-height: calc(100vh - 58px);
  text-align: center;
`;

export const Title = styled.h1`
  padding: 32px 0 24px;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${colors.brandColorPrimary};
`;

export const Card = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 32px 24px 40px;
  border-radius: 8px;
  background: ${colors.white};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const CardInfo = styled.div`
  text-align: left;

  h2 {
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;
    color: ${colors.blueGray900};
    margin-bottom: 4px;

    @media (min-width: 768px) {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${colors.blueGray400};

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;

export const FormField = styled.div<{ flexBasis?: string }>`
  text-align: left;
  margin-bottom: 16px;

  flex-basis: ${({ flexBasis }) => flexBasis || 'auto'};
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${colors.blueGray900};
  margin-bottom: 4px;
  display: block;

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

export const MonthlyAmount = styled.div`
  border: 1px solid ${colors.blueGray50};
  border-radius: 8px;
`;

export const MonthlyAmountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px 16px;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${colors.blueGray900};
  gap: 32px;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

export const MonthlyAmountSectionBottom = styled.div`
  background: ${colors.blueGray10};
  padding: 24px 32px;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: left;
  }
`;

export const MonthlyAmountValue = styled.span`
  color: ${colors.brandColorSecondary};
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.9rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 3.8rem;
  }
`;

export const Button = styled.button`
  max-width: 320px;
  width: 100%;
  background: ${colors.brandColorPrimary};
  border-radius: 32px;
  border: none;
  margin: 32px 0 0;
  padding: 18px;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${colors.white};
`;
