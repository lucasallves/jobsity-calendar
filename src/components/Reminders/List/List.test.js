import React from 'react';
import { shallow } from 'enzyme';
import List from './';

describe('<List/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <List />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
