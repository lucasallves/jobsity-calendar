import React, { useContext, useState } from 'react';
import CalendarContext from '../../../context/Calendar';
import CreateReminderButton from '../CreateReminderButton';
import RemindersForm from '../Form';
import { Container, List, EmptyMessage, ListItem, IconWeather, ListItemText } from './styles';

function Reminders() {
  const { reminders } = useContext(CalendarContext);

  const DEFAULT_FORM_DATA = {
    text: '',
    date: '11/03/2021',
    time: '3PM',
    city: '',
    color: 'blue',
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
      <EmptyMessage>No reminders yet.<br />Create one and always be there.</EmptyMessage>
    );
  }

  function _renderRemindersList() {
    return (
      <List>
        {
          reminders.map(reminder => {
            const { id, text, city, time, weather } = reminder;

            return (
              <ListItem key={id + text} onClick={() => onListItemClick(reminder)}>
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
      {!!!reminders.length && _renderEmptyState()}
      {!!reminders.length && _renderRemindersList()}

      <CreateReminderButton onClick={toggleFormVisibility} />
      <RemindersForm
        visible={formVisibility}
        data={formData}
        actions={{ onClose: onCloseForm, clearForm }} />
    </Container>
  );
}

export default Reminders;
