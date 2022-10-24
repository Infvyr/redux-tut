import PageHeader from 'components/PageHeader';
import Space from 'components/Space';
import PostForm from 'features/posts/view/Form/PostForm';
import PostsListing from 'features/posts/view/Posts/PostsListing';

function Posts() {
	return (
		<>
			<PageHeader backTo={-1} />
			<Space />
			<div className="card xl:h-[calc(100%-122px)]">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
					<PostForm />
					<PostsListing />
				</div>
			</div>
		</>
	);
}

export default Posts;
