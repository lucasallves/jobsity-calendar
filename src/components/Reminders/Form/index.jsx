import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CalendarContext from 'context/Calendar';
import UIButton from 'components/ui/Button';
import weatherService from 'services/weather';
import { titlelize, formatDate } from 'utils/formatters';
import ColorPicker from 'components/ui/ColorPicker';

import {
  Container,
  Close,
  Title,
  Form,
  FormItem,
  Label,
  InputText,
  InputTime,
  WeatherContainer,
  WeatherImage,
  WeatherDescription,
  ButtonsContainer
} from './styles';

function RemindersForm(props) {
  const { visible, actions, data } = props;
  const { selectedDate, addReminder, updateReminder, deleteSingleReminder } = useContext(CalendarContext);
  const [editing, setEditing] = useState(false);
  const [reminder, setReminder] = useState(null);

  useEffect(() => {
    setReminder({ ...data, date: selectedDate.fullDay });
    setEditing(!!data.id);
  }, [data, selectedDate.fullDay]);

  useEffect(() => {
    const formElement = document.querySelector('.reminders-form');
    if (formElement) formElement.scrollTo(0, 0);
  }, [visible]);

  function onInputChange(key, value) {
    const _value = key === 'text' ? value.substring(0, 30) : value;
    setReminder({ ...reminder, ...{ [key]: _value } });
  }

  async function saveReminder() {
    if (!formIsValid()) {
      return false;
    }

    let { data } = await weatherService.getweatherForCity(reminder.city);
    let weather = data.weather;

    if (Array.isArray(weather)) {
      weather = data.weather[0];
    }

    const payload = { ...reminder, weather };

    if (editing) {
      updateReminder(payload);
    } else {
      addReminder(payload);
    }

    actions.onClose();
    actions.clearForm();
  }

  function deleteReminder() {
    deleteSingleReminder(reminder.id);
    actions.onClose();
    actions.clearForm();
  }

  function formIsValid() {
    const errors = Object.keys(reminder).filter(key => {
      const validFiedlds = ['id', 'weather'];
      if (validFiedlds.includes(key) || reminder[key].length) {
        return false;
      }

      return key;
    });

    return !errors.length;
  }

  return reminder && (
    <Container visible={visible} className="reminders-form">
      <Close onClick={actions.onClose} />
      <Title> {editing ? 'Edit' : 'New'} Reminder </Title>

      {editing && (
        <WeatherContainer>
          <WeatherImage src={`http://openweathermap.org/img/wn/${reminder.weather.icon}@2x.png`} />
          <WeatherDescription>{titlelize(reminder.weather.description)}</WeatherDescription>
        </WeatherContainer>
      )}

      <Form>
        <FormItem>
          <Label>Reminder ({reminder.text.length}/30):</Label>
          <InputText
            type="text"
            placeholder="What do you want to remind?"
            value={reminder.text}
            onChange={e => onInputChange('text', e.target.value)} />
        </FormItem>
        <FormItem>
          <Label>City:</Label>
          <InputText
            type="text"
            placeholder="Where?"
            value={reminder.city}
            onChange={e => onInputChange('city', e.target.value)} />
        </FormItem>
        <FormItem>
          <Label>Date (use the calendar to pick a date):</Label>
          <InputText
            type="text"
            placeholder="Date"
            value={formatDate(selectedDate)}
            onChange={() => { }}
            disabled={true} />
        </FormItem>
        <FormItem>
          <Label>Time:</Label>
          <InputTime
            mask="99:99"
            value={reminder.time}
            onChange={e => onInputChange('time', e.target.value)} />
        </FormItem>
        <FormItem>
          <Label>Pick a color:</Label>
          <ColorPicker onChange={color => onInputChange('color', color)} value={reminder.color} />
        </FormItem>

        <ButtonsContainer>
          <UIButton label={editing ? 'Save' : 'Create'} onClick={saveReminder} />
          {editing && <UIButton label="Delete" onClick={deleteReminder} type="danger" />}
        </ButtonsContainer>
      </Form>
    </Container>
  );
}

RemindersForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default RemindersForm;
