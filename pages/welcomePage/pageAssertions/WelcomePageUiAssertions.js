import { expect } from '../../../fixture/fixture';

export class WelcomePageUiAssertions {
	constructor() {}

	async assertSubmitCompleteMessage(welcomePage) {
			await expect(welcomePage.returnSubmitCompleteText()).toContainText('Thanks for getting in touch');
	}
}


