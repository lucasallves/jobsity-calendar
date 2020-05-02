import React from 'react';
import { Container, IconPlus, Label } from './styles';

function FloatingButton(props) {
  const { label, onClick } = props;

  return (
    <Container onClick={onClick}>
      <IconPlus />
      <Label>{label}</Label>
    </Container>
  );
}

export default FloatingButton;
