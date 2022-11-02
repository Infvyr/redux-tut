import Button from 'components/Button';
import ModalNewPerson from 'features/crud/view/ModalNewPerson';
import { useState } from 'react';

function TableAddForm() {
	let [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Button
				className="btn-primary"
				title="Add new person"
				onClick={openModal}
			>
				Add new
			</Button>
			<ModalNewPerson isOpen={isOpen} closeModal={closeModal} />
		</>
	);
}

export default TableAddForm;
