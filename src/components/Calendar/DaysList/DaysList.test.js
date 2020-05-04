import React from 'react';
import { shallow } from 'enzyme';
import DaysList from './';

describe('<DaysList/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <DaysList />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
