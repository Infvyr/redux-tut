import Button from 'components/Button';
import { Edit, Trash } from 'grommet-icons';

function TableActions() {
	return (
		<div className="flex gap-3 items-center">
			<Button className="!px-2 !min-h-[28px] btn-primary" title="Edit user">
				<Edit size="16" className="edit" />
			</Button>
			<Button className="!px-2 !min-h-[28px] btn-danger" title="Delete user">
				<Trash size="16" className="edit" />
			</Button>
		</div>
	);
}

export default TableActions;
