import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label } from './styles';

function Button(props) {
  const { label, onClick, type } = props;

  const theme = {
    danger: {
      background: '#D21F3C',
      color: '#FFFFFF'
    }
  }

  return (
    <Container onClick={onClick} theme={theme[type]}>
      <Label theme={theme[type]}>{label}</Label>
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Button;
