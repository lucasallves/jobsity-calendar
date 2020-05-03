import React, { useContext, useState } from 'react';
import CalendarContext from 'context/Calendar';
import FloatingButton from 'components/ui/FloatingButton';
import RemindersForm from 'components/Reminders/Form';
import utils from 'utils';
import { Container, List, EmptyMessage, ListItem, IconWeather, ListItemText, ClearLink } from './styles';

function Reminders() {
  const { reminders, selectedDate, deleteRemindersByDate } = useContext(CalendarContext);
  const todayReminders = reminders.filter(reminder => reminder.date === selectedDate.fullDay);
  const sortedTodayReminders = utils.sortByTime(todayReminders);

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
      <EmptyMessage>No reminders on this day.<br />Create reminders on your calendar anytime.</EmptyMessage>
    );
  }

  function _renderRemindersList() {
    return (
      <List>
        {
          sortedTodayReminders.map(reminder => {
            const { id, text, city, time, weather } = reminder;

            return (
              <ListItem key={id} onClick={() => onListItemClick(reminder)} color={reminder.color}>
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
      {!sortedTodayReminders.length && _renderEmptyState()}
      {sortedTodayReminders.length > 0 && _renderRemindersList()}
      {sortedTodayReminders.length > 0 && (
        <ClearLink onClick={() => deleteRemindersByDate(selectedDate.fullDay)}>Clear All Day</ClearLink>
      )}

      <FloatingButton label="Create" onClick={toggleFormVisibility} />
      <RemindersForm
        visible={formVisibility}
        data={formData}
        actions={{ onClose: onCloseForm, clearForm }} />
    </Container>
  );
}

export default Reminders;
