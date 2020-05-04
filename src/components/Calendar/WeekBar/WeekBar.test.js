import React from 'react';
import { shallow } from 'enzyme';
import WeekBar from './';

describe('<WeekBar/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <WeekBar />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
