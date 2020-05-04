import React from 'react';
import { shallow } from 'enzyme';
import ActionBar from './';

describe('<ActionBar/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <ActionBar />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
