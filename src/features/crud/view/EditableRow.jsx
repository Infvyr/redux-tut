import {
	selectPeople,
	updatePeople,
	updatePerson,
} from 'features/crud/slices/peopleSlice';
import TableActions from 'features/crud/view/TableActions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const tableCellClassName = 'px-3 py-[0.6875rem] whitespace-nowrap';

function EditableRow({ personId, setPersonId }) {
	const dispatch = useDispatch();
	const people = useSelector(selectPeople);
	const existingPerson = people.slice().find(person => person.id === personId);

	const [editData, setEditData] = useState({
		firstName: existingPerson.firstName,
		lastName: existingPerson.lastName,
		birthDate: existingPerson.birthDate,
		email: existingPerson.email,
		address: existingPerson.address.address,
	});

	const onEditFirstName = e =>
		setEditData({ ...editData, firstName: e.target.value });
	const onEditLastName = e =>
		setEditData({ ...editData, lastName: e.target.value });
	const onEditBDay = e =>
		setEditData({ ...editData, birthDate: e.target.value });
	const onEditEmail = e => setEditData({ ...editData, email: e.target.value });
	const onEditAddress = e =>
		setEditData({ ...editData, address: e.target.value });

	const cancelEditRow = () => setPersonId(null);

	const handleEditRow = () => {
		try {
			dispatch(
				updatePerson({
					id: personId,
					firstName: editData.firstName,
					lastName: editData.lastName,
					birthDate: editData.birthDate,
					email: editData.email,
					address: editData.address,
				})
			);
			dispatch(updatePeople());

			cancelEditRow();
		} catch (e) {
			console.error('Failed to update person', e);
		}
	};

	return (
		<tr className="editable-row">
			<td className="py-[0.6875rem] pl-4 pr-3 whitespace-nowrap sm:pl-6">
				<input
					type="text"
					name="firstName"
					placeholder="Enter first name..."
					className="w-full"
					value={editData.firstName}
					onChange={onEditFirstName}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="lastName"
					placeholder="Enter last name..."
					className="w-full"
					value={editData.lastName}
					onChange={onEditLastName}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="date"
					name="bdate"
					placeholder="Enter birthdate..."
					className="w-full"
					value={editData.birthDate}
					onChange={onEditBDay}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="email"
					name="email"
					placeholder="Enter email..."
					className="w-full"
					value={editData.email}
					onChange={onEditEmail}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="address"
					placeholder="Enter address..."
					className="w-full"
					value={editData.address}
					onChange={onEditAddress}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<TableActions
					onEditRow={handleEditRow}
					cancelEditRow={cancelEditRow}
					isEditable
				/>
			</td>
		</tr>
	);
}

export default EditableRow;
