import { expect } from '../../../fixture/fixture';

export class WelcomePageMockAssertions {
	constructor() {}

	assertSuccessResponse(response) {
		expect(response.status).toBe(200);

}

}