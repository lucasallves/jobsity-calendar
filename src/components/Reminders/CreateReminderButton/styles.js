import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import colors from '../../../theme/colors';

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 20px;
  padding: 12px 25px;
  cursor: pointer;
  transition: box-shadow .3s ease-in-out;
  outline: none;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, .4);
  }
`;

export const Label = styled.span`
  color: ${colors.greyDark};
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
`;

export const IconPlus = styled(FaPlus)`
  color: ${colors.greyDark};
  font-size: 14px;
  margin-right: 5px;
`;