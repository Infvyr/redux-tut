import Button from 'components/Button';
import { Favorite, Java, Like, Sign } from 'grommet-icons';

function Reactions({ reactions }) {
	const { like, heart, cool, coffee } = reactions;

	return (
		<div className="features inline-flex items-center gap-x-2 flex-wrap">
			<div className="inline-flex items-center gap-x-1">
				<Button className="btn-transparent">
					<Like size="18" />
				</Button>
				<span>{like}</span>
			</div>
			<div className="inline-flex items-center gap-x-1">
				<Button className="">
					<Favorite size="18" />
				</Button>
				<span>{heart}</span>
			</div>
			<div className="inline-flex items-center gap-x-1">
				<Button className="">
					<Sign size="18" />
				</Button>
				<span>{cool}</span>
			</div>
			<div className="inline-flex items-center gap-x-1">
				<Button className="">
					<Java size="18" />
				</Button>
				<span>{coffee}</span>
			</div>
		</div>
	);
}

export default Reactions;
