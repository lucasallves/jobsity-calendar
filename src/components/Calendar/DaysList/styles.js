import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const DayContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% / 7);
  padding: 5px;
  cursor: pointer;

  opacity: ${({ currentMonth }) => currentMonth ? '1' : '0.5'};
`;

export const Day = styled.span`
  display: block;
  width: 24px;
  height: 24px;

  background-color: ${({ active }) => active ? colors.blue : 'transparent'};
  color: ${({ active }) => active ? colors.white : colors.greyLight};

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;

  cursor: pointer;
  border-radius: 50%;
  transition: background-color .3s;
`;