export const manageLocalStorage = key => {
	let value = localStorage.getItem(key);
	localStorage.clear();
	return value;
};

export const setLocalStorage = (key, data) => {
	localStorage.setItem(key, data);
};

export const getDataInLocalStorage = key => {
	return localStorage.getItem(key);
};

export const removeDataInLocalStorage = key => {
	return localStorage.removeItem(key);
};
