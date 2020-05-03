import React from 'react';
import PropTypes from 'prop-types';
import { Container, IconPlus, Label } from './styles';

function FloatingButton(props) {
  const { label, onClick } = props;

  return (
    <Container onClick={onClick}>
      <IconPlus />
      <Label>{label}</Label>
    </Container>
  );
}

FloatingButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FloatingButton;
