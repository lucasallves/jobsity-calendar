import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import colors from '../../../theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const MonthName = styled.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 300;
  cursor: pointer;
  color: ${colors.blue};

  padding: 10px 20px;
  border-radius: 20px;
  transition: background-color .3s;

  &:hover {
    background-color: rgba(19, 75, 215, 0.1);
  }
`;

export const ArrowLeft = styled(FaChevronLeft)`
  cursor: pointer;
  font-size: 16px;
  color: ${colors.blue};
  border-radius: 50%;
  box-sizing: content-box;
  padding: 5px;

  &:hover {
    background-color: rgba(19, 75, 215, 0.1);
  }
`;

export const ArrowRight = styled(FaChevronRight)`
  cursor: pointer;
  font-size: 16px;
  color: ${colors.blue};
  border-radius: 50%;
  box-sizing: content-box;
  padding: 5px;

  &:hover {
    background-color: rgba(19, 75, 215, 0.1);
  }
`;