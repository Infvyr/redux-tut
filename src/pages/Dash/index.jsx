import PageHeader from 'components/PageHeader';
import Space from 'components/Space';

function Dash() {
	return (
		<>
			<PageHeader backTo={false} title="Dashboard" />
			<Space twHeight="h-10" />

			<div className="card h-screen">
				<p>A stats maybe</p>
			</div>
		</>
	);
}

export default Dash;
