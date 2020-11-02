const Legend = ({ legendItems }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'stretch',
			}}
		>
			{legendItems.map((item) => (
				<div
					key={item.range}
					style={{
						backgroundColor: item.color,
						flex: 1,
						display: 'flex',
						alignItems: 'center', // vertical
						justifyContent: 'center', // horiztontal
						color: item.textColor,
						fontWeight: 'bolder',
						fontSize: '1em',
						height: '10vh',
					}}
				>
					<span>{item.range}</span>
				</div>
			))}
		</div>
	);
};

export default Legend;
