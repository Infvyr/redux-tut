import EditableRow from 'features/crud/view/EditableRow';
import ReadOnlyRow from 'features/crud/view/ReadOnlyRow';
import { useSortPeople } from 'hooks/useSortPeople';
import { Fragment, useState } from 'react';

function TableBody() {
	const sortedPeople = useSortPeople();

	const [personId, setPersonId] = useState(null);

	const setRowAsEditable = person => setPersonId(person.id);

	return (
		<tbody className="bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-700">
			{sortedPeople.slice().map(person => (
				<Fragment key={person.id}>
					{personId === person.id ? (
						<EditableRow personId={personId} setPersonId={setPersonId} />
					) : (
						<ReadOnlyRow person={person} onEdit={setRowAsEditable} />
					)}
				</Fragment>
			))}
		</tbody>
	);
}

export default TableBody;
