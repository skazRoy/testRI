import { qtest } from '../fixture/fixture';

qtest('UI: успешная отправка формы', async ({ pages, assertions, customerData }) => {

    await pages.welcomePage.goToWelcomePage();
		await pages.welcomePage.fillName(customerData.name);
		await pages.welcomePage.fillEmail(customerData.email);
		await pages.welcomePage.fillPhone(customerData.phone);
		await pages.welcomePage.fillSubject(customerData.subject);
    await pages.welcomePage.fillDescription(customerData.description);
		await pages.welcomePage.clickSubmitButton()
    await assertions.welcomePageUiAssertions.assertSubmitCompleteMessage(pages.welcomePage);
});

// прошу прощения, апишки через плейрайт еще толком не гонял, поэтому в таком формате тест
qtest('API: успешная отправка формы', async ({ apiHelper, customerData, assertions }) => {
	const data = {
			name: customerData.name,
			email: customerData.email,
			phone: customerData.phone,
			subject: customerData.subject,
			description: customerData.description
	};

	const response = await apiHelper.sendContactForm(data);

	assertions.welcomePageMockAssertions.assertSuccessResponse(response);
});


