import { Folder } from 'grommet-icons';
import { Link } from 'react-router-dom';

function ProjectItem({ url, name }) {
	return (
		<div className="flex flex-col items-start gap-y-2 group">
			<Link
				to={url}
				className="p-5 rounded group-hover:bg-amber-100 dark:group-hover:bg-slate-700 transition-colors"
			>
				<Folder size="180px" />
				<h2 className="project-title">{name}</h2>
			</Link>
		</div>
	);
}

export default ProjectItem;
