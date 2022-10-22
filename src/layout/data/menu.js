import { ReactComponent as Redux } from 'assets/images/redux.svg';
import { Dashboard } from 'grommet-icons';

export const MENU_ITEMS = [
	{
		key: 'dash',
		name: 'Dash',
		url: '/',
		icon: <Dashboard size="20" />,
	},
	{
		key: 'redux',
		name: 'Redux',
		url: 'redux',
		icon: <Redux />,
	},
];
