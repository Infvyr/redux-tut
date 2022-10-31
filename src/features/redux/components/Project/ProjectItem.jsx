import { Folder } from 'grommet-icons';
import { Link } from 'react-router-dom';
import styles from './ProjectItem.module.css';

function ProjectItem({ url, name }) {
	return (
		<div className={styles.wrapper}>
			<Link to={url} className={styles.link}>
				<Folder className={styles.icon} />
				<h2 className={styles.title}>{name}</h2>
			</Link>
		</div>
	);
}

export default ProjectItem;
