import React from 'react';
import { Container, InputRadio } from './styles.js';
import reminderColors from '../../../theme/reminderColors';

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

export default ColorPicker;