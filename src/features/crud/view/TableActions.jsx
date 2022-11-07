import Button from 'components/Button';
import { deletePerson } from 'features/crud/thunks';
import { Edit, FormClose, Save, Trash } from 'grommet-icons';
import { useDispatch } from 'react-redux';

function TableActions({
	person,
	onEdit,
	onEditRow,
	cancelEditRow,
	isDisabled,
	isEditable,
}) {
	const dispatch = useDispatch();

	const onDelete = async id => {
		try {
			await dispatch(deletePerson(id)).unwrap();
			// toast success
		} catch (e) {
			// toast error
			console.error('onDelete person', e);
		}
	};

	return (
		<div className="flex gap-3 items-center">
			{isEditable ? (
				<>
					<Button
						className="!px-2 !min-h-[28px] btn-primary"
						title="Save"
						disabled={isDisabled}
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
					<Button
						className="!px-2 !min-h-[28px] btn-danger"
						title="Delete"
						onClick={async () => onDelete(person.id)}
					>
						<Trash size="16" />
					</Button>
				</>
			)}
		</div>
	);
}

export default TableActions;
