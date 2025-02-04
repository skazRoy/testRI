// в идеале еще разбить на отедльные контейнеры 
// и уже их передавать в класс страницы
// а здесь уже создать общий метод для взаимодействия с формой чтобы в тесте обращаться только к нему
// тогда код будет более читабельный и его легче будет поддерживать

export class WelcomePage {
	constructor(page) {
			this.page = page;
			this.NAME_INPUT = page.locator('[data-testid="ContactName"]');
			this.EMAIL_INPUT = page.locator('[data-testid="ContactEmail"]');
			this.PHONE_INPUT = page.locator('[data-testid="ContactPhone"]');
			this.SUBJECT_INPUT = page.locator('[data-testid="ContactSubject"]');
			this.DESCRIPTION_INPUT = page.locator('[data-testid="ContactDescription"]');
			this.SUBMIT_BUTTON = page.locator('#submitContact');
			this.SUBMIT_COMPLETE_TEXT = page.locator("xpath=//*[@id='root']//div[@class = 'container-fluid']//div[@class='row contact']//h2");
	}

	async goToWelcomePage() {
			await this.page.goto('https://automationintesting.online');
	}

	async fillName(name) {
			await this.NAME_INPUT.fill(name);
	}

	async fillEmail(email) {
			await this.EMAIL_INPUT.fill(email);
	}

	async fillPhone(phone) {
			await this.PHONE_INPUT.fill(phone);
	}

	async fillSubject(subject) {
			await this.SUBJECT_INPUT.fill(subject);
	}

	async fillDescription(description) {
			await this.DESCRIPTION_INPUT.fill(description);
	}

	async clickSubmitButton() {
			await this.SUBMIT_BUTTON.click();
	}

	returnSubmitCompleteText() {
			return this.SUBMIT_COMPLETE_TEXT;
	}
}
