import React, { useContext } from 'react';
import CalendarContext from '../../context/Calendar';
import utils from '../../utils/calendar';
import Reminders from '../Reminders';
import { Container, DayContainer, DayName, DayNumber } from './styles';

function SelectedDay() {
  const { selectedDate } = useContext(CalendarContext);
  const dayOfWeekName = utils.getDayOfWeekName(selectedDate);

  return (
    <Container>
      <DayContainer>
        <DayName>{dayOfWeekName}</DayName>
        <DayNumber>{selectedDate.day}</DayNumber>
      </DayContainer>
      <Reminders />
    </Container>
  );
}

export default SelectedDay;
