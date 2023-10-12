const LOWER_BOUND = 0;

const updateClassList = (
	element: Element,
	appendClassName: string,
	removeClassName: string
) => {
	element?.classList.add(appendClassName);
	element?.classList.remove(removeClassName);
};

export const onShiftCard = (
	containerRef: React.RefObject<HTMLDivElement>,
	activeCard: React.MutableRefObject<number>,
	updateValue: number
) => {
	if (!containerRef.current) return;

	const { current: prevActiveCardIndex } = activeCard;
	const containerChildren = containerRef.current.children;
	const upperBound = containerChildren.length;

	if (
		prevActiveCardIndex + updateValue < upperBound &&
		prevActiveCardIndex + updateValue >= LOWER_BOUND
	) {
		updateClassList(
			containerChildren[prevActiveCardIndex],
			'inactive',
			'active'
		);
		activeCard.current = prevActiveCardIndex + updateValue;
		updateClassList(
			containerChildren[activeCard.current],
			'active',
			'inactive'
		);

		containerChildren[activeCard.current].scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
			block: 'nearest',
		});
	}
};
