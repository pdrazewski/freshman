import React from 'react';
import UserDetail from './user-detail';
import Faker from 'faker';


const Users = [
	{name: Faker.name.findName() },
	{name: Faker.name.findName() },
	{name: Faker.name.findName() },
	{name: Faker.name.findName() },
	{name: Faker.name.findName() }
]

const UserList = (props) => {

	const validUsers = props.images.filter(user => !user.is_album) 

	const RenderUsers = props.images.map(user => 
		<UserDetail key={user.title} user={user} />
	);
	return (
		<ul>
			{RenderUsers}
		</ul>
	)
}

export default UserList;

