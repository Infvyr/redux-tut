import SearchInput from 'features/crud/view/SearchInput';
import TableAddForm from 'features/crud/view/TableAddForm';

function TablePanel() {
	return (
		<header className="mt-8 grid grid-cols-[0.1fr_1fr] md:grid-cols-[auto_1fr_1fr] items-start gap-x-2 gap-y-3">
			<TableAddForm />
			<SearchInput />
		</header>
	);
}

export default TablePanel;
