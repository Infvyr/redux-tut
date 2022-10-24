import Button from 'components/Button';
import Space from 'components/Space';
import { postAdded } from 'features/posts/slices/postsSlice';
import { selectAllUsers } from 'features/users/slices/usersSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PostForm.module.css';

function PostForm() {
	const dispatch = useDispatch();
	const users = useSelector(selectAllUsers);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [authorId, setAuthorId] = useState('');

	const onTitleChanged = e => setTitle(e.target.value);
	const onContentChanged = e => setContent(e.target.value);
	const onAuthorChanged = e => setAuthorId(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded(title, content, authorId));
			setTitle('');
			setContent('');
			setAuthorId('');
		}
	};

	const canSave = Boolean(title) && Boolean(content) && Boolean(authorId);

	const userOptions = users.map(user => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	return (
		<section>
			<h2 className={styles['section-title']}>Add a new post</h2>
			<Space />

			<form className={styles.form}>
				<div className={styles['form-group']}>
					<label htmlFor="postTitle" className={styles.label}>
						Title:
					</label>
					<input
						type="text"
						name="postTitle"
						id="postTitle"
						value={title}
						onChange={onTitleChanged}
					/>
				</div>

				<div className={styles['form-group']}>
					<label htmlFor="postAuthor" className={styles.label}>
						Author:
					</label>
					<select id="postAuthor" value={authorId} onChange={onAuthorChanged}>
						<option value="">Select an author</option>
						{userOptions}
					</select>
				</div>

				<div className={styles['form-group']}>
					<label htmlFor="postContent" className={styles.label}>
						Content:
					</label>
					<textarea
						name="postContent"
						id="postContent"
						value={content}
						onChange={onContentChanged}
					/>
				</div>

				<footer className={styles.footer}>
					<Button
						className={`${styles.submit} btn-primary`}
						onClick={onSavePostClicked}
						disabled={!canSave}
					>
						Save post
					</Button>
				</footer>
			</form>
		</section>
	);
}

export default PostForm;
