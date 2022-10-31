import { Descending } from 'grommet-icons';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

function SortableColumn({ prop, children }) {
	let { pathname } = useLocation();
	let [searchParams] = useSearchParams();
	let [sortProp, desc] = searchParams.get('sort')?.split(':') ?? [];
	let newSort = null;

	if (sortProp !== prop) {
		newSort = prop;
	} else if (sortProp === prop && !desc) {
		newSort = `${prop}:desc`;
	}

	let newSearchParams = new URLSearchParams({ sort: newSort });

	return (
		<th
			scope="col"
			className="py-3.5 px-3 first:pl-4 text-left dark:text-white first:sm:pl-6"
		>
			<Link
				to={newSort ? `${pathname}?${newSearchParams}` : pathname}
				className="inline-flex font-semibold group"
			>
				{children}
				<span
					className={`${
						sortProp === prop
							? 'bg-gray-200 dark:bg-gray-600 group-hover:bg-gray-300 dark:group-hover:bg-gray-500'
							: 'invisible text-gray-400 group-hover:visible'
					} flex-none ml-2 rounded`}
				>
					<Descending
						className={`${
							desc ? 'rotate-180' : ''
						} dark:!stroke-white dark:!fill-white w-5 h-5`}
						aria-hidden="true"
					/>
				</span>
			</Link>
		</th>
	);
}

export default SortableColumn;
