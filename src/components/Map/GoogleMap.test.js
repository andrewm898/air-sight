import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Map from './Map';

describe('Map', () => {
  let props;
  let shallowMap;
  let renderedMap;
  let mountedMap;

  const shallowTestComponent = () => {
    if (!shallowMap) {
      shallowMap = shallow(<Map {...props} />);
    }
    return shallowMap;
  };

  const renderTestComponent = () => {
    if (!renderedMap) {
      renderedMap = render(<Map {...props} />);
    }
    return renderedMap;
  };

  const mountTestComponent = () => {
    if (!mountedMap) {
      mountedMap = mount(<Map {...props} />);
    }
    return mountedMap;
  };  

  beforeEach(() => {
    props = {};
    shallowMap = undefined;
    renderedMap = undefined;
    mountedMap = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
