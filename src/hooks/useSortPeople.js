import { selectPeople } from 'features/crud/slices/peopleSlice';
import { useSearchParamsByName } from 'hooks/useSearchParamsByName';
import { useSelector } from 'react-redux';

function useSortPeople() {
	const people = useSelector(selectPeople);
	let [sortProp, desc] = useSearchParamsByName('sort');

	return [...people].sort((a, b) => {
		switch (sortProp) {
			case 'birthDate':
				return desc
					? new Date(b[sortProp]) - new Date(a[sortProp])
					: new Date(a[sortProp]) - new Date(b[sortProp]);

			case 'address':
				return desc
					? b[sortProp]?.address.localeCompare(a[sortProp]?.address)
					: a[sortProp]?.address.localeCompare(b[sortProp]?.address);

			default:
				return desc
					? b[sortProp]?.localeCompare(a[sortProp])
					: a[sortProp]?.localeCompare(b[sortProp]);
		}
	});
}

export { useSortPeople };
