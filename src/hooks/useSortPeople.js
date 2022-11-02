import { selectPeople } from 'features/crud/slices/peopleSlice';
import { useSearchParamsByName } from 'hooks/useSearchParamsByName';
import { useSelector } from 'react-redux';

function useSortPeople() {
	const people = useSelector(selectPeople);
	let [sortProp, desc] = useSearchParamsByName('sort');

	return [...people].sort((a, b) => {
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
}

export { useSortPeople };
