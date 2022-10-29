import Button from 'components/Button';
import Space from 'components/Space';
import { addNewPost } from 'features/posts/slices/dynamicPostsSlice';
import {
	fetchUsers,
	getUsersError,
	getUsersStatus,
	selectAllApiUsers,
} from 'features/users/slices/dynamicUsersSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PostForm.module.css';

function ApiPostForm() {
	const dispatch = useDispatch();
	const users = useSelector(selectAllApiUsers);
	const usersStatus = useSelector(getUsersStatus);
	const usersError = useSelector(getUsersError);

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [userId, setUserId] = useState('');
	const [addRequestStatus, setAddRequestStatus] = useState('idle');

	const onTitleChanged = e => setTitle(e.target.value);
	const onContentChanged = e => setBody(e.target.value);
	const onAuthorChanged = e => setUserId(e.target.value);

	const canSave =
		[title, body, userId].every(Boolean) && addRequestStatus === 'idle';

	const onSavePostClicked = () => {
		if (canSave) {
			try {
				setAddRequestStatus('pending');

				dispatch(addNewPost({ title, body, userId })).unwrap();

				setTitle('');
				setBody('');
				setUserId('');
			} catch (e) {
				console.error('Failed to save the post', e);
			} finally {
				setAddRequestStatus('idle');
			}
		}
	};

	const userOptions = users.map(user => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	const submitBtnTitle =
		addRequestStatus === 'idle' ? 'Save post' : 'Saving post...';

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<section>
			<h2 className={styles['section-title']}>Add a new api post</h2>
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
					{usersStatus === 'failed' ? (
						<input type="text" readOnly value={usersError} />
					) : (
						<select id="postAuthor" value={userId} onChange={onAuthorChanged}>
							<option value="">
								{usersStatus === 'idle' && null}
								{usersStatus === 'loading' && '...'}
								{usersStatus === 'succeeded' && 'Select an author'}
							</option>
							{userOptions}
						</select>
					)}
				</div>

				<div className={styles['form-group']}>
					<label htmlFor="postContent" className={styles.label}>
						Content:
					</label>
					<textarea
						name="postContent"
						id="postContent"
						value={body}
						onChange={onContentChanged}
					/>
				</div>

				<footer className={styles.footer}>
					<Button
						className={`${styles.submit} btn-primary`}
						onClick={onSavePostClicked}
						disabled={!canSave}
					>
						{submitBtnTitle}
					</Button>
				</footer>
			</form>
		</section>
	);
}

export default ApiPostForm;
