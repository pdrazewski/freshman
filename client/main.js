import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/user-list';
import Axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {images: []};
	}
	componentWillMount() {
		Axios.get("https://api.imgur.com/3/gallery/hot/viral/0")
		.then(response => this.setState({images: response.data.data}));
	}
	render() {
		return (
			<div>
				<UserList images={this.state.images} />
			</div>
		)
	}
}

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById("react-app"));
}); 

