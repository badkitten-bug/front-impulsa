import axios from 'axios';

export const fetchingForm = async (
	url = '',
	method = '',
	body = null,
	headers = {},
	responseType,
) => {
	try {
		const requestResponse = await axios({
			url: url,
			method: method,
			data: body,
			headers: headers,
			responseType: responseType ? responseType : '',
		});

		return {
			ok: true,
			status: requestResponse.status,
			data: requestResponse.data,
			headers: requestResponse.headers,
		};
	} catch (error) {
		// console.log(error);

		return {
			ok: false,
			status: error.response?.status || 'Network Error',
			msg: error.response?.data.msg || 'Network Error',
			data: error.response?.data.data?.errors || [error.response?.data],
			headers: error.response?.headers || {},
		};
	}
};
