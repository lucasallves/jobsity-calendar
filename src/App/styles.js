import styled from 'styled-components';
import colors from '../theme/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 750px;
  height: 100%;
  max-height: 450px;
  background-color: ${colors.white};
`;

export const Side = styled.div`
  width: 50%;
  height: 100%;
`;