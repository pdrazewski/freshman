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
	const RenderUsers = Users.map(function(user){
		return <UserDetail user={user} />
	})
	return (
		<ul>
			{RenderUsers}
		</ul>
	)
}

export default UserList;

