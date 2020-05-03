import React, { useContext, useState } from 'react';
import { Container, MonthName, ArrowLeft, ArrowRight } from './styles';
import MonthSelector from 'components/ui/MonthSelector';
import CalendarContext from 'context/Calendar';
import utils from 'utils/calendar';

function ActionBar() {
  const [showSelector, setShowSelector] = useState(false);
  const { navigation, setNavigation } = useContext(CalendarContext);
  const monthName = utils.getMonthName(navigation.month - 1);

  function prevMonth() {
    let month = navigation.month - 1;
    let year = navigation.year;

    if (month < 1) {
      month = 12;
      year -= 1;
    }

    setNavigation({ month, year });
  }

  function nextMonth() {
    let month = navigation.month + 1;
    let year = navigation.year;

    if (month > 12) {
      month = 1;
      year += 1;
    }

    setNavigation({ month, year });
  }

  function toggleMonthSelector() {
    setShowSelector(!showSelector);
  }

  return (
    <Container>
      <ArrowLeft onClick={prevMonth} />
      <MonthName onClick={toggleMonthSelector}>{monthName}, {navigation.year}</MonthName>
      <ArrowRight onClick={nextMonth} />
      <MonthSelector show={showSelector} actions={{ toggleMonthSelector }} />
    </Container>
  )
}

export default ActionBar;
