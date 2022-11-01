import TableActions from 'features/crud/view/TableActions';

const tableCellClassName = 'px-3 py-[0.6875rem] whitespace-nowrap';

function EditableRow({ editFormData, onEdit }) {
	const { name, city, email, companyName } = editFormData;

	return (
		<tr className="editable-row">
			<td className="py-[0.6875rem] pl-4 pr-3 whitespace-nowrap sm:pl-6">
				<input
					type="text"
					name="name"
					placeholder="Enter a name..."
					className="w-full"
					value={name}
					onChange={onEdit}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="city"
					placeholder="Enter a city..."
					className="w-full"
					value={city}
					onChange={onEdit}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="email"
					placeholder="Enter an email..."
					className="w-full"
					value={email}
					onChange={onEdit}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<input
					type="text"
					name="company"
					placeholder="Enter a company..."
					className="w-full"
					value={companyName}
					onChange={onEdit}
					required
				/>
			</td>
			<td className={tableCellClassName}>
				<TableActions isEditable />
			</td>
		</tr>
	);
}

export default EditableRow;
