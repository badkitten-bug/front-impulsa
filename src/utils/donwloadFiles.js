export const downloadFiles = binaryData => {
	const blob = new Blob([binaryData], { type: 'application/octet-stream' });
	const url = URL.createObjectURL(blob);
	return url;
};
