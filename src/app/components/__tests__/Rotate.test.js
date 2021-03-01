/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Rotate } from '../Rotate';

describe('rotate', () => {
  let mountedComponent;

  beforeEach(() => {
    mountedComponent = shallow(<Rotate />);
  });

  it('renders', () => {
    shallow(<Rotate />);
  });
});