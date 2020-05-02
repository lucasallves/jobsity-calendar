import React, { useState } from 'react';
import { Container, WeekLetter } from './styles';

function WeekBar() {
  const [weekNames] = useState(['S', 'M', 'T', 'W', 'T', 'F', 'S']);

  return (
    <Container>
      {weekNames.map((name, index) => <WeekLetter key={name + index}>{name}</WeekLetter>)}
    </Container>
  )
}

export default WeekBar;