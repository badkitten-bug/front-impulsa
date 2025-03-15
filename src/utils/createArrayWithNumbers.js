export const createArrayWithNumbers = length => {
	const newArray = Array.from({ length: length }, (_, i) => (i + 1).toString());

	return newArray;
};
