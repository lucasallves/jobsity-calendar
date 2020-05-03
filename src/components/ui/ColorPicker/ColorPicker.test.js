import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './';

describe('<ColorPicker/>', () => {
  it('renders', () => {
    const wrapper = shallow(
      <ColorPicker value="#134BD7" onChange={() => { }} />
    );
    expect(wrapper.exists()).toBe(true);
  })
});
