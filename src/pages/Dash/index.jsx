import PageHeader from 'components/PageHeader';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

function Dash() {
	const readmeFile = 'dash.md';
	const [content, setContent] = useState('');

	useEffect(() => {
		import(`markdown/${readmeFile}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setContent(res));
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<>
			<PageHeader backTo={false} title="Dashboard" />

			<div className="card grow">
				<Markdown>{content}</Markdown>
			</div>
		</>
	);
}

export default Dash;
