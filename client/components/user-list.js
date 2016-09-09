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

const UserList = () => {
	const RenderUsers = Users.map(user => 
		<UserDetail key={user.name} user={user} />
	);
	return (
		<ul>
			{RenderUsers}
		</ul>
	)
}

export default UserList;

