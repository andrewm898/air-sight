import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Account from './Account';

describe('Account', () => {
  let props;
  let shallowAccount;
  let renderedAccount;
  let mountedAccount;

  const shallowTestComponent = () => {
    if (!shallowAccount) {
      shallowAccount = shallow(<Account {...props} />);
    }
    return shallowAccount;
  };

  const renderTestComponent = () => {
    if (!renderedAccount) {
      renderedAccount = render(<Account {...props} />);
    }
    return renderedAccount;
  };

  const mountTestComponent = () => {
    if (!mountedAccount) {
      mountedAccount = mount(<Account {...props} />);
    }
    return mountedAccount;
  };  

  beforeEach(() => {
    props = {};
    shallowAccount = undefined;
    renderedAccount = undefined;
    mountedAccount = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
