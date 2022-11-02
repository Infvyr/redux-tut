import Button from 'components/Button';
import { Edit, FormClose, Save, Trash } from 'grommet-icons';

function TableActions({
	person,
	onEdit,
	onEditRow,
	cancelEditRow,
	isEditable,
}) {
	return (
		<div className="flex gap-3 items-center">
			{isEditable ? (
				<>
					<Button
						className="!px-2 !min-h-[28px] btn-primary"
						title="Save"
						onClick={onEditRow}
					>
						<Save size="16" />
					</Button>
					<Button
						className="!px-2 !min-h-[28px] btn-danger"
						title="Cancel"
						onClick={cancelEditRow}
					>
						<FormClose size="16" />
					</Button>
				</>
			) : (
				<>
					<Button
						className="!px-2 !min-h-[28px] btn-primary"
						title="Edit"
						onClick={() => onEdit(person)}
					>
						<Edit size="16" />
					</Button>
					<Button className="!px-2 !min-h-[28px] btn-danger" title="Delete">
						<Trash size="16" />
					</Button>
				</>
			)}
		</div>
	);
}

export default TableActions;
