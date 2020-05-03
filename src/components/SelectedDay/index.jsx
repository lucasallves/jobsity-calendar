import React, { useContext } from 'react';
import CalendarContext from 'context/Calendar';
import utils from 'utils/calendar';
import Reminders from 'components/Reminders';
import { Container, DayName, DayNumber } from './styles';

function SelectedDay() {
  const { selectedDate } = useContext(CalendarContext);
  const dayOfWeekName = utils.getDayOfWeekName(selectedDate);

  return (
    <Container>
      <DayName>{dayOfWeekName}</DayName>
      <DayNumber>{selectedDate.day}</DayNumber>
      <Reminders />
    </Container>
  );
}

export default SelectedDay;
