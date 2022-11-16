import Button from 'components/Button';
import { fetchPeople } from 'features/crud/thunks';
import { Close } from 'grommet-icons';
import { useDispatch } from 'react-redux';

function SearchedText({ searchTerm, setSearchedTerm = () => {} }) {
	const dispatch = useDispatch();

	const onReset = () => {
		dispatch(fetchPeople());
		setSearchedTerm('');
	};

	return searchTerm ? (
		<div className="col-start-2 col-end-3 md:col-start-3 md:col-end-4 text-right">
			<mark
				className="pl-2 pr-7 py-0.5 max-w-[120px] relative inline-block rounded text-left bg-blue-600 text-white leading-none truncate cursor-default"
				title={searchTerm}
			>
				{searchTerm}
				<Button
					className="!px-0.5 py-0.5 btn-danger absolute top-0 right-0 !min-h-full !rounded-tl-none !rounded-bl-none rounded-tr rounded-br"
					title="Clear"
					onClick={onReset}
				>
					<Close size="13px" color="white" />
				</Button>
			</mark>
		</div>
	) : null;
}

export default SearchedText;
