import React from 'react';
import { Container, Label } from './styles';

function Button(props) {
  const { label, onClick } = props;

  return (
    <Container onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
}

export default Button;