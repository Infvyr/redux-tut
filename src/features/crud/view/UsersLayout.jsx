import PageHeader from 'components/PageHeader';
import Space from 'components/Space';
import {
	fetchPeople,
	getPeopleError,
	getPeopleStatus,
	selectPeople,
} from 'features/crud/slices/peopleSlice';
import TableActions from 'features/crud/view/TableActions';
import TableHeader from 'features/crud/view/TableHeader';
import UsersDescription from 'features/crud/view/UsersDescription';
import { useSearchParamsByName } from 'hooks/useSearchParamsByName';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*const people = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		address: {
			street: 'Kulas Light',
			suite: 'Apt. 556',
			city: 'Gwenborough',
			zipcode: '92998-3874',
			geo: {
				lat: '-37.3159',
				lng: '81.1496',
			},
		},
		phone: '1-770-736-8031 x56442',
		website: 'hildegard.org',
		company: {
			name: 'Romaguera-Crona',
			catchPhrase: 'Multi-layered client-server neural-net',
			bs: 'harness real-time e-markets',
		},
	},
	{
		id: 2,
		name: 'Ervin Howell',
		username: 'Antonette',
		email: 'Shanna@melissa.tv',
		address: {
			street: 'Victor Plains',
			suite: 'Suite 879',
			city: 'Wisokyburgh',
			zipcode: '90566-7771',
			geo: {
				lat: '-43.9509',
				lng: '-34.4618',
			},
		},
		phone: '010-692-6593 x09125',
		website: 'anastasia.net',
		company: {
			name: 'Deckow-Crist',
			catchPhrase: 'Proactive didactic contingency',
			bs: 'synergize scalable supply-chains',
		},
	},
];*/

const tableCellClassName = 'px-3 py-3.5 whitespace-nowrap';

function UsersLayout() {
	let content = null;

	const dispatch = useDispatch();
	const people = useSelector(selectPeople);
	const peopleStatus = useSelector(getPeopleStatus);
	const peopleError = useSelector(getPeopleError);

	let [sortProp, desc] = useSearchParamsByName('sort');
	let sortedPeople = [...people].sort((a, b) => {
		switch (sortProp) {
			case 'address':
				return desc
					? b[sortProp]?.city?.localeCompare(a[sortProp]?.city)
					: a[sortProp]?.city?.localeCompare(b[sortProp]?.city);

			case 'company':
				return desc
					? b[sortProp]?.name?.localeCompare(a[sortProp]?.name)
					: a[sortProp]?.name?.localeCompare(b[sortProp]?.name);

			default:
				return desc
					? b[sortProp]?.localeCompare(a[sortProp])
					: a[sortProp]?.localeCompare(b[sortProp]);
		}
	});

	useEffect(() => {
		dispatch(fetchPeople());
	}, [dispatch]);

	if (peopleStatus === 'loading') {
		content = <p>Loading...</p>;
	}

	if (peopleStatus === 'succeeded') {
		content = (
			<table className="min-w-full divide-y divide-gray-300">
				<TableHeader />

				<tbody className="bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-700">
					{sortedPeople.map(person => (
						<tr
							key={person.id}
							className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
						>
							<td className="py-3.5 pl-4 pr-3 whitespace-nowrap sm:pl-6">
								{person.name}
							</td>
							<td className={tableCellClassName}>{person.address.city}</td>
							<td className={tableCellClassName}>{person.email}</td>
							<td className={tableCellClassName}>{person.company.name}</td>
							<td className={tableCellClassName}>
								<TableActions />
							</td>
						</tr>
					))}
				</tbody>
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

				<div className="flex flex-col mt-8">
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
