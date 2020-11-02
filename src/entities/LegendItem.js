class LegendItem {
	defaultColor = 'black';
	constructor(range, color, doesMatch, textColor) {
		this.range = range;
		this.color = color;
		this.doesMatch = doesMatch;
		this.textColor = textColor != null ? textColor : this.defaultColor;
	}
}

export default LegendItem;
