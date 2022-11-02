import EditableRow from 'features/crud/view/EditableRow';
import ReadOnlyRow from 'features/crud/view/ReadOnlyRow';
import { useSortPeople } from 'hooks/useSortPeople';
import { Fragment } from 'react';

function TableBody({ setEditFormData, setPersonId, editFormData, personId }) {
	const sortedPeople = useSortPeople();

	const handleEditRow = (e, person) => {
		e.preventDefault();

		setPersonId(person.id);

		const formValues = {
			name: person.name,
			city: person.address.city,
			email: person.email,
			companyName: person.company.name,
		};

		setEditFormData(formValues);
	};

	const handleEditFormChange = e => {
		e.preventDefault();

		const fieldName = e.target.getAttribute('name');
		const fieldValue = e.target.value;
		const newFormData = { ...editFormData };

		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	return (
		<tbody className="bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-700">
			{sortedPeople.slice().map(person => (
				<Fragment key={person.id}>
					{personId === person.id ? (
						<EditableRow
							editFormData={editFormData}
							onEdit={handleEditFormChange}
						/>
					) : (
						<ReadOnlyRow person={person} onEdit={handleEditRow} />
					)}
				</Fragment>
			))}
		</tbody>
	);
}

export default TableBody;
