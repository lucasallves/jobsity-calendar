import styled from 'styled-components';
import colors from '../../../theme/colors';
import { FaTimes } from 'react-icons/fa';
import InputMask from "react-input-mask";

export const Container = styled.div`
  background-color: ${colors.greyLightest};
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 40px 40px 0 40px;

  opacity: ${({ visible }) => visible ? '1' : '0'};
  pointer-events: ${({ visible }) => visible ? 'auto' : 'none'};

  position: absolute;
  top: 0;
  left: 0;
  transition: opacity .3s;
`;

export const Close = styled(FaTimes)`
  color: ${colors.greyDark};
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
`;

export const Form = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const Title = styled.h3`
  color: ${colors.greyDark};
  font-size: 20px;
  margin-bottom: 20px;
`;

export const FormItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  color: ${colors.greyDark};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const InputText = styled.input`
  width: 100%;
  border: none;
  height: 30px;
  border-radius: 15px;
  padding: 0 15px;
  outline: none;
  font-size: 12px;
  color: ${colors.primary};
`;

export const InputTime = styled(InputMask)`
  width: 100%;
  border: none;
  height: 30px;
  border-radius: 15px;
  padding: 0 15px;
  outline: none;
  font-size: 12px;
  color: ${colors.primary};
`;

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const WeatherImage = styled.img`
  width: 50px;
`;

export const WeatherDescription = styled.span`
  color: ${colors.greyDark};
  font-size: 14px;
  padding-left: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;