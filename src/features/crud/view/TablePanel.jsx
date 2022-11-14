import SearchInput from 'features/crud/view/SearchInput';
import TableAddForm from 'features/crud/view/TableAddForm';

function TablePanel() {
	return (
		<header className="mt-8 flex gap-x-2 gap-y-5 justify-between flex-wrap">
			<TableAddForm />
			<SearchInput />
		</header>
	);
}

export default TablePanel;
