import TimeAgo from 'app/utils/TimeAgo';
import Space from 'components/Space';
import {
	fetchPosts,
	getPostsError,
	getPostsStatus,
	selectAllApiPosts,
} from 'features/posts/slices/dynamicPostsSlice';
import ApiAuthor from 'features/posts/view/Author/ApiAuthor';
import ApiReactions from 'features/posts/view/Reactions/ApiReactions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ApiPostsListing() {
	let content = null;
	const dispatch = useDispatch();

	const posts = useSelector(selectAllApiPosts);
	const postsStatus = useSelector(getPostsStatus);
	const postsError = useSelector(getPostsError);

	useEffect(() => {
		if (postsStatus === 'idle') {
			dispatch(fetchPosts());
		}
	}, [dispatch, postsStatus]);

	if (postsStatus === 'pending') {
		content = <p>Loading...</p>;
	}

	if (postsStatus === 'succeeded') {
		const orderedPosts = posts
			.slice()
			.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

		content = orderedPosts.map(post => {
			const { id, title, body, createdAt, userId } = post;
			const excerpt = body.substring(0, 100);

			return (
				<article
					key={id}
					className="px-5 py-4 border border-gray-900 dark:border-white rounded"
				>
					<h3 className="first-letter:capitalize">{title}</h3>
					<p className="my-4 text-[15px] xl:text-base">{excerpt}</p>
					<footer className="flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							<ApiAuthor userId={userId} />
							<TimeAgo timestamp={createdAt} />
						</p>
						<ApiReactions post={post} />
					</footer>
				</article>
			);
		});
	}

	if (postsStatus === 'failed') {
		content = <p>{postsError}</p>;
	}

	return (
		<section>
			<h2 className="md:text-3xl">List of posts</h2>
			<Space twHeight="h-6 lg:h-[52px]" />

			<div className="flex flex-col gap-y-5 no-scrollbar overflow-auto">
				{content}
			</div>
		</section>
	);
}

export default ApiPostsListing;
