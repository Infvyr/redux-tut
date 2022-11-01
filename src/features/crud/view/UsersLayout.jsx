import PageHeader from 'components/PageHeader';
import Space from 'components/Space';
import { initialFormState } from 'features/crud/context/Crud.context';
import {
	fetchPeople,
	getPeopleError,
	getPeopleStatus,
	selectPeople,
} from 'features/crud/slices/peopleSlice';
import EditableRow from 'features/crud/view/EditableRow';
import ReadOnlyRow from 'features/crud/view/ReadOnlyRow';
import TableHeader from 'features/crud/view/TableHeader';
import UsersDescription from 'features/crud/view/UsersDescription';
import { useSearchParamsByName } from 'hooks/useSearchParamsByName';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UsersLayout() {
	let content = null;

	const dispatch = useDispatch();
	const people = useSelector(selectPeople);
	const peopleStatus = useSelector(getPeopleStatus);
	const peopleError = useSelector(getPeopleError);

	const [personId, setPersonId] = useState(null);
	const [editFormData, setEditFormData] = useState(initialFormState);

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

	const handleEditRow = (e, person) => {
		e.preventDefault();

		setPersonId(person.id);

		const formValues = {
			name: person.name,
			city: person.address.city,
			email: person.email,
			companyName: person.company.name,
		};

		setEditFormData(formValues);
	};

	const handleEditFormChange = e => {
		e.preventDefault();

		const fieldName = e.target.getAttribute('name');
		const fieldValue = e.target.value;
		const newFormData = { ...editFormData };

		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	const handleEditFormSubmit = e => {
		e.preventDefault();

		const editedRowData = {
			id: personId,
			name: editFormData.name,
			city: editFormData.city,
			email: editFormData.email,
			companyName: editFormData.companyName,
		};

		const newData = [...people];

		const index = newData.findIndex(p => p.id === personId);
		newData[index] = editedRowData;
		setPersonId(null);
	};

	useEffect(() => {
		dispatch(fetchPeople());
	}, [dispatch]);

	if (peopleStatus === 'loading') {
		content = <p>Loading...</p>;
	}

	if (peopleStatus === 'succeeded') {
		content = (
			<form onSubmit={handleEditFormSubmit}>
				<table className="min-w-full divide-y divide-gray-300">
					<TableHeader />

					<tbody className="bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-700">
						{sortedPeople.map(person => (
							<Fragment key={person.id}>
								{personId === person.id ? (
									<EditableRow
										editFormData={editFormData}
										onEdit={handleEditFormChange}
									/>
								) : (
									<ReadOnlyRow person={person} onEdit={handleEditRow} />
								)}
							</Fragment>
						))}
					</tbody>
				</table>
			</form>
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
