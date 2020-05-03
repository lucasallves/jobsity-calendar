import React, { useState, useContext } from 'react';
import { Container, MonthList, MonthContainer, Month, YearNavigation, Year, ArrowLeft, ArrowRight, Close } from './styles';
import CalendarContext from 'context/Calendar';

function MonthSelector(props) {
  const { show, actions } = props;
  const { navigation, setNavigation } = useContext(CalendarContext);
  const [year, setYear] = useState(navigation.year);
  const [monthList] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

  function onSelectMonth(monthNumber) {
    setNavigation({ month: monthNumber, year });
    actions.toggleMonthSelector();
  }

  function onDecreaseYear() {
    setYear(year - 1);
  }

  function onIncreaseYear() {
    setYear(year + 1);
  }

  function onClose() {
    actions.toggleMonthSelector();
  }

  return (
    <Container show={show}>
      <Close onClick={onClose} />

      <YearNavigation>
        <ArrowLeft onClick={onDecreaseYear} />
        <Year>{year}</Year>
        <ArrowRight onClick={onIncreaseYear} />
      </YearNavigation>

      <MonthList>
        {
          monthList.map((month, index) => (
            <MonthContainer key={month}>
              <Month active={(index + 1) === navigation.month} onClick={() => onSelectMonth(index + 1)}>{month}</Month>
            </MonthContainer>
          ))
        }
      </MonthList>
    </Container>
  )
}

export default MonthSelector;
