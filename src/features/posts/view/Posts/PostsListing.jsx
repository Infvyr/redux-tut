import Button from 'components/Button';
import Space from 'components/Space';
import { Favorite, Java, Like, Sign } from 'grommet-icons';

function PostsListing() {
	return (
		<section>
			<h2 className="md:text-3xl">List of posts</h2>
			<Space twHeight="h-6 lg:h-[52px]" />

			<div className="flex flex-col gap-y-5 no-scrollbar overflow-auto h-[calc(100vh-210px)]">
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
				<article className="px-5 py-4 border border-gray-900 dark:border-white rounded">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.
					</p>
					<footer className="meta flex flex-col xl:flex-row xl:items-center justify-between gap-1">
						<p>
							by author &nbsp;
							<time dateTime="2022-10-23:4:20pm">less than a minute ago</time>
						</p>
						<div className="features inline-flex items-center gap-x-2 flex-wrap">
							<div className="inline-flex items-center gap-x-1">
								<Button className="btn-transparent">
									<Like size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Favorite size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Sign size="18" />
								</Button>
								<span>0</span>
							</div>
							<div className="inline-flex items-center gap-x-1">
								<Button className="">
									<Java size="18" />
								</Button>
								<span>0</span>
							</div>
						</div>
					</footer>
				</article>
			</div>
		</section>
	);
}

export default PostsListing;
