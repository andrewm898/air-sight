import React from 'react';
import { shallow, render, mount } from 'enzyme';
import DroneInfo from './DroneInfo';

describe('DroneInfo', () => {
  let props;
  let shallowDroneInfo;
  let renderedDroneInfo;
  let mountedDroneInfo;

  const shallowTestComponent = () => {
    if (!shallowDroneInfo) {
      shallowDroneInfo = shallow(<DroneInfo {...props} />);
    }
    return shallowDroneInfo;
  };

  const renderTestComponent = () => {
    if (!renderedDroneInfo) {
      renderedDroneInfo = render(<DroneInfo {...props} />);
    }
    return renderedDroneInfo;
  };

  const mountTestComponent = () => {
    if (!mountedDroneInfo) {
      mountedDroneInfo = mount(<DroneInfo {...props} />);
    }
    return mountedDroneInfo;
  };  

  beforeEach(() => {
    props = {};
    shallowDroneInfo = undefined;
    renderedDroneInfo = undefined;
    mountedDroneInfo = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
