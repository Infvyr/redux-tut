import PageHeader from 'components/PageHeader';
import Space from 'components/Space';
import ApiPostsListing from 'features/posts/view/DynamicPosts/ApiPostsListing';
import ApiPostForm from 'features/posts/view/Form/ApiPostForm';

function DynamicPosts() {
	return (
		<>
			<PageHeader backTo={-1} />
			<Space />
			<div className="card xl:h-[calc(100%-122px)]">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
					<ApiPostForm />
					<ApiPostsListing />
				</div>
			</div>
		</>
	);
}

export default DynamicPosts;
