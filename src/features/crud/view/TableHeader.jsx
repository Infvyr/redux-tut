import SortableColumn from 'features/crud/view/SortableColumn';

function TableHeader() {
	return (
		<thead className="h-12 bg-gray-50 dark:bg-gray-700">
			<tr className="font-bold text-lg">
				<SortableColumn prop="name">Name</SortableColumn>
				<SortableColumn prop="address">Address</SortableColumn>
				<SortableColumn prop="email">Email</SortableColumn>
				<SortableColumn prop="company">Company</SortableColumn>
				<td className="px-3">Action</td>
			</tr>
		</thead>
	);
}

export default TableHeader;
