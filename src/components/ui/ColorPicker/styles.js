import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputRadio = styled.input`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => color};
  background-color: white;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  transition: border-width .3s ease-in-out;

  &:checked {
    border-width: 10px;
  }
`;