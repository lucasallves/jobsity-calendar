import React, { useState, useEffect, useContext } from 'react';
import { Container, DayContainer, Day } from './styles';
import utils from '../../../utils/calendar';
import CalendarContext from '../../../context/Calendar';

function DaysList() {
  const { selectedDate, navigation, setDate } = useContext(CalendarContext);
  const [monthData, setMonthData] = useState(null);

  useEffect(() => {
    const data = utils.getDataForMonthYear(navigation.month, navigation.year);
    setMonthData(data);
  }, [selectedDate, navigation]);

  function isActiveDay(day) {
    const isSameDayNumber = day.day === selectedDate.day;
    const isSameMonth = day.month === selectedDate.month;
    const isSameYear = day.year === selectedDate.year;
    return isSameDayNumber && isSameMonth && isSameYear;
  }

  return monthData && (
    <Container>
      {
        monthData.previousMonthDays.map(day => (
          <DayContainer key={day.fullDay} onClick={() => setDate(day)}>
            <Day>{day.day}</Day>
          </DayContainer>
        ))
      }

      {
        monthData.daysInMonth.map(day => (
          <DayContainer key={day.fullDay} currentMonth={true} onClick={() => setDate(day)}>
            <Day active={isActiveDay(day)}>{day.day}</Day>
          </DayContainer>
        ))
      }

      {
        monthData.nextMonthDays.map(day => (
          <DayContainer key={day.fullDay} onClick={() => setDate(day)}>
            <Day>{day.day}</Day>
          </DayContainer>
        ))
      }
    </Container>
  )
}

export default DaysList;