import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;