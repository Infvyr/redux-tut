import EditableRow from 'features/crud/view/EditableRow';
import ReadOnlyRow from 'features/crud/view/ReadOnlyRow';
import { useSortPeople } from 'hooks/useSortPeople';
import { Fragment, useState } from 'react';

const tbodyClassName =
	'bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-700';

function TableBody() {
	const sortedPeople = useSortPeople();
	const [personId, setPersonId] = useState(null);

	const setRowAsEditable = person => setPersonId(person.id);

	if (sortedPeople.length === 0) {
		return (
			<tbody className={tbodyClassName}>
				<tr>
					<td colSpan={6} className="p-3.5 w-full text-center text-lg">
						No data found!
					</td>
				</tr>
			</tbody>
		);
	}

	return (
		<tbody className={tbodyClassName}>
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
