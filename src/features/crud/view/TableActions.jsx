import Button from 'components/Button';
import { Edit, Save, Trash } from 'grommet-icons';

function TableActions({ person, onEdit, isEditable }) {
	return (
		<div className="flex gap-3 items-center">
			{isEditable ? (
				<Button
					type="submit"
					className="!px-2 !min-h-[28px] btn-primary"
					title="Save user"
				>
					<Save size="16" />
				</Button>
			) : (
				<Button
					className="!px-2 !min-h-[28px] btn-primary"
					title="Edit user"
					onClick={e => onEdit(e, person)}
				>
					<Edit size="16" />
				</Button>
			)}
			<Button className="!px-2 !min-h-[28px] btn-danger" title="Delete user">
				<Trash size="16" />
			</Button>
		</div>
	);
}

export default TableActions;
