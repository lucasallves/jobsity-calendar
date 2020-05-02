import React, { useContext, useState } from 'react';
import CalendarContext from '../../../context/Calendar';
import FloatingButton from '../../ui/FloatingButton';
import RemindersForm from '../Form';
import { Container, List, EmptyMessage, ListItem, IconWeather, ListItemText } from './styles';

function Reminders() {
  const { reminders, selectedDate } = useContext(CalendarContext);
  const todayReminders = reminders.filter(reminder => {
    return reminder.date === selectedDate.fullDay;
  });

  const DEFAULT_FORM_DATA = {
    text: '',
    date: '',
    time: '',
    city: '',
    color: '',
    weather: {}
  }

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [formVisibility, setFormVisibility] = useState(false);

  function toggleFormVisibility() {
    setFormVisibility(!formVisibility);
  }

  function onCloseForm() {
    setFormData(DEFAULT_FORM_DATA);
    toggleFormVisibility();
  }

  function onListItemClick(data) {
    setFormData(data);
    toggleFormVisibility();
  }

  function clearForm() {
    setFormData(DEFAULT_FORM_DATA);
  }

  function _renderEmptyState() {
    return (
      <EmptyMessage>No reminders on this day.<br />Create one and always be there.</EmptyMessage>
    );
  }

  function _renderRemindersList() {
    return (
      <List>
        {
          todayReminders.map(reminder => {
            const { id, text, city, time, weather } = reminder;

            return (
              <ListItem key={id + text} onClick={() => onListItemClick(reminder)} color={reminder.color}>
                <ListItemText>{text}</ListItemText>
                <ListItemText>{city}, {time}</ListItemText>
                <IconWeather src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
              </ListItem>
            )
          })
        }
      </List>
    )
  }

  return reminders && (
    <Container>
      {!!!todayReminders.length && _renderEmptyState()}
      {!!todayReminders.length && _renderRemindersList()}

      <FloatingButton label="Create" onClick={toggleFormVisibility} />
      <RemindersForm
        visible={formVisibility}
        data={formData}
        actions={{ onClose: onCloseForm, clearForm }} />
    </Container>
  );
}

export default Reminders;
