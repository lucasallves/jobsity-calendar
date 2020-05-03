import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import colors from 'theme/colors';

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  overflow: hidden;

  border-radius: 15px;

  background-color: ${colors.white};
  cursor: pointer;
  transition: all .3s ease-in-out;
  outline: none;

  position: absolute;
  right: 30px;
  bottom: 30px;

  &:hover {
    width: 90px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .4);
    padding: 0 20px;

    label {
      opacity: 1;
    }
  }
`;

export const IconPlus = styled(FaPlus)`
  color: ${colors.greyDark};
  font-size: 14px;

  position: absolute;
  top: 7px;
  left: 7px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  opacity: 0;
  color: ${colors.greyDark};
  font-size: 16px;
  transition: opacity .3s ease-in-out;
  padding-left: 10px;
  cursor: pointer;
`;
