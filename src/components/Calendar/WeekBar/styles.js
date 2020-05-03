import styled from 'styled-components';
import colors from 'theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const WeekLetter = styled.span`
  display: block;
  width: calc(100% / 7);
  font-size: 16px;
  font-weight: 500;
  color: ${colors.greyDark};
  text-align: center;
`;
