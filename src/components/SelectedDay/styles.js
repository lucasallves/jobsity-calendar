import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 50px 30px;
  color: ${colors.white};
  background-color: ${colors.blue};
`;

export const DayName = styled.span`
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 20px;
  font-size: 16px;
  line-height: 15px;
  font-weight: 300;
  padding: 12px 25px;
`;

export const DayNumber = styled.h1`
  font-size: 70px;
  line-height: 70px;
  margin-top: 5px;
  font-weight: 500;
`;