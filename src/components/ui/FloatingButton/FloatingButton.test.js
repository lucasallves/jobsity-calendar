import React from 'react';
import { shallow } from 'enzyme';
import FloatingButton from './';

describe('<FloatingButton/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <FloatingButton label="Create" onClick={() => { }} />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
