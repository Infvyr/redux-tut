import { useSearchParams } from 'react-router-dom';

function useSearchParamsByName(sortBy, delimiter = ':') {
	try {
		let [searchParams] = useSearchParams();

		if (typeof sortBy === 'undefined' || typeof sortBy !== 'string') return;
		if (typeof delimiter !== 'string') return;

		return searchParams.get(sortBy)?.split(delimiter) ?? [];
	} catch (e) {
		console.error(e);
	}
}

export { useSearchParamsByName };
