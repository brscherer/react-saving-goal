import styled from 'styled-components';
import { colors } from '@/styles/global';

export const FieldWrapper = styled.div`
  padding: 7px 12px;
  border: 1px solid ${colors.blueGray50};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 56px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
`;

export const InputValue = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonthValue = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: ${colors.blueGray900};
`;

export const YearValue = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${colors.blueGray400};
`;
