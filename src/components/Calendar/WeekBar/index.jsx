import React from 'react';
import { weekNames } from 'utils/calendar';
import { Container, WeekLetter } from './styles';

function WeekBar() {
  return (
    <Container>
      {weekNames.map((name, index) => <WeekLetter key={name + index}>{name}</WeekLetter>)}
    </Container>
  )
}

export default WeekBar;
