import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './';

describe('<Calendar/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Calendar />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
