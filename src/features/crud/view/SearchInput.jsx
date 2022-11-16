import Button from 'components/Button';
import { searchPeople } from 'features/crud/thunks';
import SearchedText from 'features/crud/view/SearchedText';
import { Search } from 'grommet-icons';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

function SearchInput() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const [searched, setSearched] = useState('');

	const onChange = e => setSearch(e.target.value.trim());

	const onClick = async () => {
		if (search.length >= 2) {
			try {
				await dispatch(searchPeople(search)).unwrap();
				setSearch('');
				setSearched(search);
			} catch (e) {
				toast.error(e);
			}
		}
	};

	const onKeyDown = async e => {
		if (e.code === 'Enter') {
			if (search.length >= 2) {
				try {
					await dispatch(searchPeople(search)).unwrap();
					setSearch('');
					setSearched(search);
				} catch (e) {
					toast.error(e);
				}
			}
		}
	};

	return (
		<div className="relative md:col-start-3 md:col-end-4 justify-self-end lg:max-w-[50%] lg:w-full flex flex-col gap-y-3">
			<input
				type="search"
				name="search"
				className="w-full py-[7px] pr-14 border border-transparent bg-gray-100 dark:bg-gray-700 outline-none dark:text-white focus:border-black dark:focus:border-white appearance-none"
				placeholder="Search users..."
				value={search}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
			<Button
				className="absolute top-0 right-0 btn-primary !rounded-tl-none !rounded-bl-none md:!min-h-[40px]"
				onClick={onClick}
			>
				<Search size="20px" color="white" />
			</Button>
			<SearchedText searchTerm={searched} setSearchedTerm={setSearched} />
		</div>
	);
}

export default SearchInput;
