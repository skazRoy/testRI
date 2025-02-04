export class ApiHelper {
	constructor(request) {
			this.request = request;  
	}

	async sendContactForm(data) {
			const response = await this.request.post('message', data);
			return response;
	}
}