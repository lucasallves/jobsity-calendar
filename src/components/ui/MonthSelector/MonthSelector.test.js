import React from 'react';
import { shallow } from 'enzyme';
import MonthSelector from './';

describe('<MonthSelector/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MonthSelector show={true} actions={{}} />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
