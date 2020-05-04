import styled from 'styled-components';
import colors from 'theme/colors';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background ? theme.background : colors.primary};
  border-radius: 20px;
  padding: 12px 25px;
  cursor: pointer;
  transition: box-shadow .3s ease-in-out;
  outline: none;
  margin: 0 auto;
  min-width: 100px;
  border: none;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, .4);
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color ? theme.color : colors.white};
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
`;
