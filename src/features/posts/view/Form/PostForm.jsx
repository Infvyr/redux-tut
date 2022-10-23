import Button from 'components/Button';
import Space from 'components/Space';
import styles from './PostForm.module.css';

function PostForm() {
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
						value={'title'}
						onChange={() => 'onTitleChanged'}
					/>
				</div>

				<div className={styles['form-group']}>
					<label htmlFor="postAuthor" className={styles.label}>
						Author:
					</label>
					<select id="postAuthor">
						<option value="">Author 1</option>
						<option value="">Author 2</option>
						<option value="">Author 3</option>
					</select>
				</div>

				<div className={styles['form-group']}>
					<label htmlFor="postContent" className={styles.label}>
						Content:
					</label>
					<textarea
						name="postContent"
						id="postContent"
						// value={''}
						// onChange={() => ''}
					/>
				</div>

				<footer className={styles.footer}>
					<Button
						className={`${styles.submit} btn-primary`}
						onClick={() => 'onSavePostClicked'}
						disabled={'!canSave'}
					>
						Save post
					</Button>
				</footer>
			</form>
		</section>
	);
}

export default PostForm;
