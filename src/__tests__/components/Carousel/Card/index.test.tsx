import React from 'react';
import { render } from '@testing-library/react';
import { DateTime } from 'luxon';
import Card from '../../../../components/Carousel/Card';
import '@testing-library/jest-dom/extend-expect';

jest.mock('luxon', () => {
	return {
		DateTime: {
			local: () => ({
				toLocaleString: () => '8/25/2001',
			}),
		},
	};
});

test('should create card with the given props', () => {
	const props = {
		jobTitle: 'Full Stack Web Dev',
		startDate: DateTime.local(2001, 8, 25),
		endDate: DateTime.local(2001, 8, 25),
		company: 'CUNY Tech Prep',
		pathToImage: 'images/cuny_tech_prep_logo.jpeg',
		description: <>some text</>,
	};

	const { getByText, getByAltText } = render(<Card {...props} />);

	expect(getByText(props.jobTitle)).toBeInTheDocument();
	expect(getByText(props.company)).toBeInTheDocument();
	expect(getByAltText('logo')).toHaveAttribute(
		'src',
		'images/cuny_tech_prep_logo.jpeg'
	);
	expect(getByText('8/25/2001 - 8/25/2001')).toBeInTheDocument();
	expect(getByText('some text')).toBeInTheDocument();
});
