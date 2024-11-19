import { faker } from '@faker-js/faker';

export async function load({ params }) {
	const { lastName } = params;

	return {
		user: {
			// _id: faker.string.uuid(),
			// sex: faker.person.sexType(),
			lastName,
			firstName: faker.person.firstName(),
			avatar: `https://api.dicebear.com/9.x/adventurer/svg?seed=${lastName}`,
			title: faker.person.jobTitle(),
			phone: faker.phone.number({ style: 'international' }),
			email: faker.internet.email(),
			birthday: faker.date.birthdate(),
			subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business'])
		}
	};
}
