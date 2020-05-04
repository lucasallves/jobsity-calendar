import React from 'react';
import { shallow } from 'enzyme';
import Reminders from './';

describe('<Reminders/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Reminders />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
