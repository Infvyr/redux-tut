function UsersDescription() {
	return (
		<div className="sm:flex sm:items-center">
			<div className="sm:flex-auto">
				<h2>Users</h2>
				<p className="mt-2">
					A list of users in your account including their name, city, email and
					company. <br /> Update and delete actions only work on loaded persons
					by default.
				</p>
				<span className="mt-2 error-message">
					<b>!!!</b> Update and delete actions don't work on new added person
					because of use of fake API.
				</span>
			</div>
		</div>
	);
}

export default UsersDescription;
