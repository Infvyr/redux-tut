import { selectAllUsers } from 'features/users/slices/usersSlice';
import { useSelector } from 'react-redux';

function Author({ authorId }) {
	const users = useSelector(selectAllUsers);

	const author = users.slice().find(user => user.id === authorId);
	const postAuthor = author ? author.name : 'Unknown';

	return <span>by {postAuthor} &nbsp;</span>;
}

export default Author;
