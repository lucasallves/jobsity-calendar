import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './';
import { InputText } from './styles';

describe('<Form/>', () => {
  const DEFAULT_FORM_DATA = {
    text: 'Text with LESS than 30 chars',
    date: '2020-05-05',
    time: '15:00',
    city: 'New York',
    color: '#D21F3C',
    weather: {
      id: 800,
      description: 'clear sky',
      icon: '01d',
      main: 'Clear'
    }
  }

  it('renders', () => {
    const wrapper = shallow(
      <Form visible={true} data={DEFAULT_FORM_DATA} actions={{ onClose: () => { } }} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('permits only 30 chars on reminder', () => {
    const wrapper = mount(
      <Form visible={true} data={DEFAULT_FORM_DATA} actions={{ onClose: () => { } }} />
    );

    wrapper.find(InputText).at(0).simulate('change', {
      target: { value: 'Text with MORE than 30 characters' }
    });

    expect(wrapper.find(InputText).at(0).props().value).toEqual('Text with MORE than 30 charact');
  });
});
