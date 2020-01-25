import React from 'react';
import PropTypes from 'prop-types';
import styles from './Account.scss';

const Account = props => (
	<div>This is a component called Account.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Account extends React.Component {
//   render() {
//     return <div>This is a component called Account.</div>;
//   }
// }

const AccountPropTypes = {
	// always use prop types!
};

Account.propTypes = AccountPropTypes;

export default Account;
