import React from 'react';
import { Container } from './styles';
import ActionBar from './ActionBar';
import WeekBar from './WeekBar';
import DaysList from './DaysList';

function Calendar({ setDate }) {
  return (
    <Container>
      <ActionBar />
      <WeekBar />
      <DaysList />
    </Container>
  );
}

export default Calendar;
