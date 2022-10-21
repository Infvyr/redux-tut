import PageHeader from 'components/PageHeader';
import ProjectItem from 'components/ProjectItem';
import Space from 'components/Space';
import { PROJECTS } from 'pages/Redux/data';

function ReduxIndexPage() {
	return (
		<>
			<PageHeader />
			<Space twHeight="h-10" />

			<div className="card h-screen">
				<div className="grid grid-cols-3 gap-5 justify-items-start">
					{!!PROJECTS.length &&
						PROJECTS.map(props => <ProjectItem key={props.key} {...props} />)}
				</div>
			</div>
		</>
	);
}

export default ReduxIndexPage;
