import React from 'react';
import PropTypes from 'prop-types';
import reminderColors from 'theme/reminderColors';
import { Container, InputRadio } from './styles.js';

function ColorPicker(props) {
  const { value, onChange } = props;

  return (
    <Container>
      {
        Object.keys(reminderColors).map(color => {
          return (
            <InputRadio
              type="radio"
              key={color}
              name="color"
              checked={reminderColors[color] === value}
              value={reminderColors[color]}
              color={reminderColors[color]}
              onChange={() => onChange(reminderColors[color])}
            />
          )
        })
      }
    </Container>
  )
}

ColorPicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorPicker;
