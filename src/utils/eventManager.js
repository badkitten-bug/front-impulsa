export const eventManager = fn => {
	let executing = false;

	return async () => {
		if (!executing) {
			executing = true;
			await fn();
			setTimeout(() => {
				executing = false;
			}, 2000);
		}
	};
};
