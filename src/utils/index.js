export const formatNumberWithCommas = function (number) {
	const num = Number(number);
	return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0;
};
