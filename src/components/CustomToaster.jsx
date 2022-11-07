import { Toaster } from 'react-hot-toast';

function CustomToaster({ duration = 4500 }) {
	return (
		<Toaster
			reverseOrder={false}
			position="bottom-left"
			toastOptions={{
				duration,
				className: 'bg-white text-gray-900 dark:!bg-gray-600 dark:!text-white',
			}}
		/>
	);
}

export default CustomToaster;
