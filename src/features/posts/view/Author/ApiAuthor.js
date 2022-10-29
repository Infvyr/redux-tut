import { selectAllApiUsers } from 'features/users/slices/dynamicUsersSlice';
import { useSelector } from 'react-redux';

function ApiAuthor({ userId }) {
	const users = useSelector(selectAllApiUsers);

	const author = users.slice().find(user => user.id === userId);
	const postAuthor = author ? author.name : 'Unknown';

	return <span>by {postAuthor} &nbsp;</span>;
}

export default ApiAuthor;
