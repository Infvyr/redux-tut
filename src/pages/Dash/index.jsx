import PageHeader from 'components/PageHeader';

function Dash() {
	return (
		<>
			<PageHeader backTo={false} title="Dashboard" />

			<div className="card grow">
				<p>A stats maybe</p>
			</div>
		</>
	);
}

export default Dash;
