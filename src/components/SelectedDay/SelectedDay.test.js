import React from 'react';
import { shallow } from 'enzyme';
import SelectedDay from './';

describe('<SelectedDay/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <SelectedDay />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
