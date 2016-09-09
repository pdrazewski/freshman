import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/user-list';

const App = () => {
	return (
		<div>
			<UserList />
		</div>
	)
}

Meteor.isProduction

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById("react-app"))
}); 

