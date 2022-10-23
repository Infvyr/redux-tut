import TimeAgo from 'app/utils/TimeAgo';
import Space from 'components/Space';
import { selectAllPosts } from 'features/posts/slices/postsSlice';
import Author from 'features/posts/view/Author';
import Reactions from 'features/posts/view/Reactions';
import { useSelector } from 'react-redux';

function PostsListing() {
	const posts = useSelector(selectAllPosts);
	const orderedPosts = posts
		.slice() // shallow copy of posts
		.sort((a, b) => b.date.localeCompare(a.date));

	return (
		<section>
			<h2 className="md:text-3xl">List of posts</h2>
			<Space twHeight="h-6 lg:h-[52px]" />

			<div className="flex flex-col gap-y-5 no-scrollbar overflow-auto h-[calc(100vh-210px)]">
				{!!orderedPosts.length &&
					orderedPosts.map(post => {
						const { id, title, content, date, reactions } = post;
						const excerpt = content.substring(0, 100);

						return (
							<article
								key={id}
								className="px-5 py-4 border border-gray-900 dark:border-white rounded"
							>
								<h3>{title}</h3>
								<p>{excerpt}</p>
								<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
									<p>
										<Author id={id} />
										<TimeAgo timestamp={date} />
									</p>
									<Reactions reactions={reactions} />
								</footer>
							</article>
						);
					})}
			</div>
		</section>
	);
}

export default PostsListing;
