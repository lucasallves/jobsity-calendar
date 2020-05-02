import React from 'react';
import { Container, Label } from './styles';

function Button(props) {
  const { label, onClick, type } = props;

  const theme = {
    danger: {
      background: '#D21F3C',
      color: '#FFFFFF'
    }
  }

  return (
    <Container onClick={onClick} theme={theme[type]}>
      <Label theme={theme[type]}>{label}</Label>
    </Container>
  );
}

export default Button;