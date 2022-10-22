import { ReactComponent as Redux } from 'assets/redux.svg';
import { Dashboard } from 'grommet-icons';

export const MENU_ITEMS = [
	{
		key: 'dash',
		name: 'Dash',
		url: '/',
		icon: <Dashboard className="menu-item-icon" size="20" />,
	},
	{
		key: 'redux',
		name: 'Redux',
		url: 'redux',
		icon: <Redux className="menu-item-icon" />,
	},
];
