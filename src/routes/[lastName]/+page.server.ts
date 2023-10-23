import { faker } from '@faker-js/faker';

export async function load({ params }) {
	const { lastName } = params;

	return {
		user: {
			lastName,
			firstName: faker.person.firstName(),
			avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${lastName}`,
			title: faker.person.jobTitle(),
			phone: faker.phone.number(),
			email: faker.internet.email()
		}
	};
}
