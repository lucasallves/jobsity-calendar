import React from 'react';
import { Container, IconPlus, Label } from './styles';

function CreateReminderButton(props) {
  const { onClick } = props;

  return (
    <Container onClick={onClick}>
      <IconPlus />
      <Label>Create</Label>
    </Container>
  );
}

export default CreateReminderButton;
