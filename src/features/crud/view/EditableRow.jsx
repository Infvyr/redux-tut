import { selectPeople, updatePerson } from 'features/crud/slices/peopleSlice';
import TableActions from 'features/crud/view/TableActions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const tableCellClassName = 'px-3 py-[0.6875rem] whitespace-nowrap';

function EditableRow({ personId, setPersonId }) {
	const dispatch = useDispatch();
	const people = useSelector(selectPeople);
	const existingPerson = people.slice().find(person => person.id === personId);

	const [editData, setEditData] = useState({
		name: existingPerson.name,
		email: existingPerson.email,
		city: existingPerson.address.city,
		companyName: existingPerson.company.name,
	});

	const onEditName = e => setEditData({ ...editData, name: e.target.value });
	const onEditCity = e => setEditData({ ...editData, city: e.target.value });
	const onEditEmail = e => setEditData({ ...editData, email: e.target.value });
	const onEditCompanyName = e =>
		setEditData({ ...editData, companyName: e.target.value });

	const cancelEditRow = () => setPersonId(null);

	const handleEditRow = () => {
		try {
			dispatch(
				updatePerson({
					id: personId,
					name: editData.name,
					city: editData.city,
					email: editData.email,
					companyName: editData.companyName,
				})
			);

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
					name="name"
					placeholder="Enter a name..."
					className="w-full"
					value={editData.name}
					onChange={onEditName}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="city"
					placeholder="Enter a city..."
					className="w-full"
					value={editData.city}
					onChange={onEditCity}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="email"
					placeholder="Enter an email..."
					className="w-full"
					value={editData.email}
					onChange={onEditEmail}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="companyName"
					placeholder="Enter a company..."
					className="w-full"
					value={editData.companyName}
					onChange={onEditCompanyName}
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
