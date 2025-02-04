import { test as base } from '@playwright/test';
import { WelcomePage } from '../pages/welcomePage/pageObjects/WelcomePage';  
import { ApiHelper } from '../utils/apiHelper'; 
import { customerData } from '../test-data/customerData';
import { WelcomePageUiAssertions } from '../pages/welcomePage/pageAssertions/WelcomePageUiAssertions';
import { WelcomePageMockAssertions } from '../pages/welcomePage/pageAssertions/WelcomePageMockAssertions';
import axios from 'axios';

export const qtest = base.extend({
    pages: async ({ page, context }, use) => {
        const pages = {
            welcomePage: new WelcomePage(page), 
        };
        await use(pages);

        await context.close();
    },

    customerData: async ({}, use) => {
        await use(customerData);
    },

    assertions: async ({page}, use) => {
        const assertions = {
            welcomePageUiAssertions: new WelcomePageUiAssertions(page),
            welcomePageMockAssertions: new WelcomePageMockAssertions(),
        };

        await use(assertions);
    },

    apiHelper: async ({axiosInstance}, use) => { 
        const apiHelper = new ApiHelper(axiosInstance);
        await use(apiHelper);
    },

		axiosInstance: async ({}, use) => { 
			const axiosInstance = axios.create({
					baseURL: 'https://automationintesting.online/',
					timeout: 10000,
			});
			await use(axiosInstance);
	},

    browserContext: async ({ browser }, use) => {
        const context = await browser.newContext();

        await context.clearCookies();
        await context.clearCache();

        await use(context);
    },
});

export { expect } from '@playwright/test';
