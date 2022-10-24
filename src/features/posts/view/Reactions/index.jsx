import Button from 'components/Button';
import { reactionAdded } from 'features/posts/slices/postsSlice';
import { Favorite, Java, Like, Sign } from 'grommet-icons';
import { useDispatch } from 'react-redux';

const reactionsIcons = {
	like: <Like size="18" />,
	heart: <Favorite size="18" />,
	cool: <Sign size="18" />,
	coffee: <Java size="18" />,
};

function Reactions({ post }) {
	const dispatch = useDispatch();

	const handleReaction = (post, name) => () =>
		dispatch(reactionAdded({ postId: post.id, reaction: name }));

	const reactionsButtons = Object.entries(reactionsIcons).map(
		([name, icon]) => {
			return (
				<div key={name} className="inline-flex items-center gap-x-1 w-14">
					<Button
						className="btn-transparent !px-1"
						onClick={handleReaction(post, name)}
					>
						{icon}
					</Button>
					<span>{post.reactions[name]}</span>
				</div>
			);
		}
	);

	return (
		<div className="features inline-flex items-center gap-x-2 flex-wrap">
			{reactionsButtons}
		</div>
	);
}

export default Reactions;
