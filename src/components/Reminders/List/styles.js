import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const List = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;

export const EmptyMessage = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  padding-bottom: 30px;
`;

export const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background-color: rgba(0, 0, 0, .1); */
  background-color: ${({ color }) => color};
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 5px 15px;
  cursor: pointer;
  transition: box-shadow .3s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, .4);
  }
`;

export const IconWeather = styled.img`
  width: 35px;
  height: auto;

  position: absolute;
  top: -15px;
  right: -10px;
`;

export const ListItemText = styled.span`
  font-size: 13px;
  font-weight: 300;
`;