import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('<Button/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Button label="Test" onClick={() => { }} />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
