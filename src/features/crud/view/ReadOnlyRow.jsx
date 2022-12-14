import TableActions from 'features/crud/view/TableActions';

const tableCellClassName = 'px-3 py-3.5 whitespace-nowrap';

function ReadOnlyRow({ person, onEdit }) {
	return (
		<tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
			<td className="py-3.5 pl-4 pr-3 whitespace-nowrap sm:pl-6">
				{person?.firstName}
			</td>
			<td className={tableCellClassName}>{person?.lastName}</td>
			<td className={tableCellClassName}>{person?.birthDate}</td>
			<td className={tableCellClassName}>{person?.email}</td>
			<td className={tableCellClassName}>{person?.address?.address}</td>
			<td className={tableCellClassName}>
				<TableActions person={person} onEdit={onEdit} />
			</td>
		</tr>
	);
}

export default ReadOnlyRow;
