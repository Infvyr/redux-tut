import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

const TimeAgo = ({ timestamp }) => {
	let timeAgo = '';
	if (timestamp) {
		const date = parseISO(timestamp);
		const timePeriod = formatDistanceToNow(date);
		timeAgo = `${timePeriod} ago`;
	}

	let formattedTimeStamp = new Date(timestamp).toLocaleString();

	return (
		<time dateTime={formattedTimeStamp} title={formattedTimeStamp}>
			<i>{timeAgo}</i>
		</time>
	);
};
export default TimeAgo;
