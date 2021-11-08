import styled from 'styled-components';
import { colors } from '@/styles/global';

export const InputWrapper = styled.div`
  padding: 14px 12px;
  border: 1px solid ${colors.blueGray50};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 100%;
    height: 2.6rem;
    font-family: 'Rubik';
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: ${colors.blueGray600};
    border: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
  }
`;
