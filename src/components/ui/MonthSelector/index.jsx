import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CalendarContext from 'context/Calendar';
import { monthList } from 'utils/calendar';
import {
  Container,
  MonthList,
  MonthContainer,
  Month,
  YearNavigation,
  Year,
  ArrowLeft,
  ArrowRight,
  Close
} from './styles';

function MonthSelector(props) {
  const { show, actions } = props;
  const { navigation, setNavigation } = useContext(CalendarContext);
  const [year, setYear] = useState(navigation.year);

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

MonthSelector.propTypes = {
  show: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default MonthSelector;
