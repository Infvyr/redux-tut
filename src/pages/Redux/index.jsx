import PageHeader from 'components/PageHeader';
import ProjectItem from 'features/redux/components/Project/ProjectItem';
import { PROJECTS } from 'pages/Redux/data';

function ReduxIndexPage() {
	return (
		<>
			<PageHeader />

			<div className="card grow">
				<div className="grid grid-cols-3 gap-5 justify-items-start">
					{!!PROJECTS.length &&
						PROJECTS.map(props => <ProjectItem key={props.key} {...props} />)}
				</div>
			</div>
		</>
	);
}

export default ReduxIndexPage;
