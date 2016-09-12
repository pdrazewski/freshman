import _ from "lodash";
import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/collections/users';
import { image, helpers } from 'faker';

Meteor.startup(() => {
	const numberUsersRecords = Users.find({}).count();
	console.log(numberUsersRecords)
	if (!numberUsersRecords) {
		_.times(5000, () => {
			const {name, email, phone} = helpers.createCard();
			Users.insert({
				name,email,phone,
				avatar: image.avatar()
			})
		})
	}
}); 

