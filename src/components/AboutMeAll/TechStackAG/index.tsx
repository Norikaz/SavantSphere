import React, { useState } from 'react';
import './styles/index.css';

const techStacks = [
	{
		name: 'JavaScript',
		bgImage: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
	},
	{
		name: 'HTML',
		bgImage: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
	},
	{
		name: 'Css',
		bgImage:
			'https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png',
	},
	{
		name: 'Python',
		bgImage: 'https://www.svgrepo.com/show/452091/python.svg',
	},
	{
		name: 'Java',
		bgImage: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg',
	},
	{
		name: 'SQL',
		bgImage: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg',
	},
];

const TechStackAG: React.FC = () => {
	const [activePanel, setActivePanel] = useState<string | null>(null);

	return (
		<div className="techstack">
			<div className="container">
				<h1 className="techstackh1">Tech Stacks</h1>
				{techStacks.map((tech, index) => (
					<div
						key={index}
						className={`panel ${tech.name === activePanel ? 'active' : ''}`}
						style={{ backgroundImage: `url('${tech.bgImage}')` }}
						onClick={() => setActivePanel(tech.name)}
					>
						<h3>{tech.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechStackAG;
