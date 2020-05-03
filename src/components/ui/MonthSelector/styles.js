import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import colors from 'theme/colors';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  opacity: ${({ show }) => show ? '1' : '0'};
  pointer-events: ${({ show }) => show ? 'auto' : 'none'};
  background-color: ${({ show }) => show ? colors.white : 'transparent'};

  padding: 30px;
  transition: all .3s;
`;

export const YearNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ArrowLeft = styled(FaChevronLeft)`
  cursor: pointer;
  font-size: 22px;
  color: ${colors.primary};
  border-radius: 50%;
  box-sizing: content-box;
  padding: 5px;

  &:hover {
    background-color: rgba(19, 75, 215, 0.1);
  }
`;

export const ArrowRight = styled(FaChevronRight)`
  cursor: pointer;
  font-size: 22px;
  color: ${colors.primary};
  border-radius: 50%;
  box-sizing: content-box;
  padding: 5px;

  &:hover {
    background-color: rgba(19, 75, 215, 0.1);
  }
`;

export const Year = styled.span`
  display: block;
  text-align: center;
  color: ${colors.primary};
  font-size: 40px;
  line-height: 40px;
  font-weight: 300;
`;

export const MonthList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
`;

export const MonthContainer = styled.div`
  display: flex;
  width: 25%;
  height: 75px;
  padding: 5px;
`;

export const Month = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: 7px;

  opacity: ${({ active }) => active ? '1' : '0.5'};
  background-color: ${({ active }) => active ? colors.primary : colors.greyLight};
  color: ${colors.white};
  cursor: pointer;
  transition: opacity .3s;

  &:hover {
    opacity: 1;
  }
`;

export const Close = styled(FaTimes)`
  color: ${colors.greyDark};
  position: absolute;
  top: 20px;
  right: 35px;
  font-size: 20px;
  cursor: pointer;
`;
