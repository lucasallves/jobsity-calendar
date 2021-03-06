import React, { useState } from 'react';
import dayjs from 'dayjs';

import { Container, Wrapper, Side } from './styles';
import SelectedDay from 'components/SelectedDay';
import Calendar from 'components/Calendar';
import CalendarContext from 'context/Calendar';

function App() {
  const day = parseInt(dayjs().format('DD'));
  const month = parseInt(dayjs().format('MM'));
  const year = parseInt(dayjs().format('YYYY'));

  const [selectedDate, setSelectedDate] = useState({
    day,
    month,
    year,
    fullDay: `${year}-${month}-${day}`
  });
  const [selectedNavigation, setSelectedNavigation] = useState({ month, year });
  const [savedReminders, setSavedReminders] = useState([]);

  const contextData = {
    selectedDate: selectedDate,
    navigation: selectedNavigation,
    reminders: savedReminders,
    setDate: date => {
      setSelectedDate(date);
      setSelectedNavigation({ month: date.month, year: date.year });
    },
    setNavigation: nav => setSelectedNavigation(nav),
    addReminder: data => {
      data['id'] = Math.random();
      setSavedReminders([...savedReminders, data])
    },
    updateReminder: data => {
      const updatedReminders = savedReminders.map(reminder => {
        if (reminder.id === data.id) return data;
        return reminder;
      });
      setSavedReminders(updatedReminders);
    },
    deleteSingleReminder: id => {
      setSavedReminders(savedReminders.filter(reminder => reminder.id !== id));
    },
    deleteRemindersByDate: date => {
      setSavedReminders(savedReminders.filter(reminder => reminder.date !== date));
    }
  }

  return (
    <CalendarContext.Provider value={contextData}>
      <Container>
        <Wrapper>

          <Side>
            <SelectedDay />
          </Side>
          <Side>
            <Calendar />
          </Side>

        </Wrapper>
      </Container>
    </CalendarContext.Provider>
  );
}

export default App;
