import React, { useState } from 'react';
import dayjs from 'dayjs';

import { Container, Wrapper, Side } from './styles';
import SelectedDay from '../components/SelectedDay';
import Calendar from '../components/Calendar';

import CalendarContext from '../context/Calendar';

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

  const [selectedNavigation, setSelectedNavigation] = useState({
    month,
    year
  });

  const [savedReminders, setSavedReminders] = useState([
    {
      id: 1,
      text: 'Meeting with Jobsity',
      date: '2020-05-01',
      time: '8 AM',
      city: 'Pelotas',
      color: '#999999',
      weather: {
        id: 803,
        description: 'broken clouds',
        icon: '04d',
        main: 'Clouds',
      }
    },
    {
      id: 2,
      text: 'Buy food',
      date: '2020-05-01',
      time: '6 PM',
      city: 'New York',
      color: '#999999',
      weather: {
        id: 803,
        description: 'broken clouds',
        icon: '04d',
        main: 'Clouds',
      }
    }
  ]);

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
    updateReminder: (data) => {
      const updatedReminders = savedReminders.map(reminder => {
        if (reminder.id === data.id) return data;
        return reminder;
      });
      setSavedReminders(updatedReminders);
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
