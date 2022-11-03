import PageHeader from 'components/PageHeader';
import Space from 'components/Space';
import {
	fetchPeople,
	getPeopleError,
	getPeopleStatus,
} from 'features/crud/slices/peopleSlice';
import TableBody from 'features/crud/view/TableBody';
import TableHeader from 'features/crud/view/TableHeader';
import TablePanel from 'features/crud/view/TablePanel';
import UsersDescription from 'features/crud/view/UsersDescription';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UsersLayout() {
	let content = null;

	const dispatch = useDispatch();
	const peopleStatus = useSelector(getPeopleStatus);
	const peopleError = useSelector(getPeopleError);
	const runRef = useRef(false);

	useEffect(() => {
		if (runRef.current) return;
		runRef.current = true;
		if (peopleStatus === 'idle') {
			dispatch(fetchPeople());
		}
	}, [dispatch, peopleStatus]);

	if (peopleStatus === 'loading') {
		content = <p>Loading...</p>;
	}

	if (peopleStatus === 'succeeded') {
		content = (
			<table className="min-w-full divide-y divide-gray-300">
				<TableHeader />
				<TableBody />
			</table>
		);
	}

	if (peopleStatus === 'failed') {
		content = <p>{peopleError}</p>;
	}

	return (
		<>
			<PageHeader backTo="/redux" />
			<Space />
			<div className="card h-screen xl:h-[calc(100%-122px)]">
				<UsersDescription />
				<TablePanel />

				<div className="flex flex-col mt-6">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded">
								{content}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UsersLayout;
