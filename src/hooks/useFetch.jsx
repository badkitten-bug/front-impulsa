import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, method, headers = {}, body = null) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetching = async () => {
			try {
				const response = await axios({
					url: url,
					method: method,
					headers: headers,
					data: body,
				});
				setData(response.data);
			} catch (err) {
				setError(err.response.data);
			} finally {
				setLoading(false);
			}
		};

		fetching();
	}, [url, method, body]);

	return { data, error, loading };
}

export default useFetch;
