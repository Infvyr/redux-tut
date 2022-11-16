import { Dialog, Transition } from '@headlessui/react';
import Button from 'components/Button';
import { initialFormState } from 'features/crud/data/initalState';
import { addNewPerson } from 'features/crud/thunks';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { ReactComponent as Spinner } from 'assets/images/spinner.svg';

const initialAddRequestStatus = 'idle';

function ModalNewPerson({ isOpen, closeModal }) {
	const dispatch = useDispatch();
	const [formState, setFormState] = useState(initialFormState);
	const [addRequestStatus, setAddRequestStatus] = useState(
		initialAddRequestStatus
	);

	const handleChange = e =>
		setFormState({ ...formState, [e.target.name]: e.target.value });

	const canSave =
		[
			formState.firstName,
			formState.lastName,
			formState.email,
			formState.birthDate,
			formState.address,
		].every(Boolean) && addRequestStatus === 'idle';

	const onAddNewPerson = async e => {
		e.preventDefault();

		if (canSave) {
			try {
				setAddRequestStatus('pending');

				await dispatch(
					addNewPerson({
						firstName: formState.firstName?.trim(),
						lastName: formState.lastName?.trim(),
						birthDate: formState.birthDate?.trim(),
						email: formState.email?.trim(),
						address: { address: formState.address?.trim() },
					})
				).unwrap();

				toast.success('Successfully added!');
			} catch (e) {
				toast.error(e);
			} finally {
				setAddRequestStatus(initialAddRequestStatus);
				setFormState(initialFormState);
				closeModal();
			}
		}
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/50" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded bg-white dark:bg-gray-700 shadow transition-all">
								<Dialog.Title
									as="h3"
									className="p-5 text-xl font-medium border-b border-gray-900 dark:border-white"
								>
									Add new person
									<p className="mt-2 text-sm">
										This will add a new person to&nbsp;
										<a
											href="https://dummyjson.com/docs/users"
											title="Open source API"
											rel="noopener, nofollow noreferrer"
											className="underline-offset-4 underline"
											target="_blank"
										>
											dummyjson users api
										</a>
									</p>
								</Dialog.Title>

								<div className="px-6 pt-3">
									<form onSubmit={onAddNewPerson}>
										<div className="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
											<div>
												<label htmlFor="firstName">
													First Name &nbsp;
													<span title="Required" className="text-red-600">
														*
													</span>
												</label>
												<input
													id="firstName"
													name="firstName"
													type="text"
													className="mt-2 w-full"
													value={formState.firstName || ''}
													onChange={handleChange}
													required
												/>
											</div>

											<div>
												<label htmlFor="lastName">
													Last Name &nbsp;
													<span title="Required" className="text-red-600">
														*
													</span>
												</label>
												<input
													id="lastName"
													name="lastName"
													type="text"
													className="mt-2 w-full"
													value={formState.lastName || ''}
													onChange={handleChange}
													required
												/>
											</div>

											<div>
												<label htmlFor="email">
													Email &nbsp;
													<span title="Required" className="text-red-600">
														*
													</span>
												</label>
												<input
													id="email"
													name="email"
													type="email"
													className="mt-2 w-full"
													value={formState.email || ''}
													onChange={handleChange}
													required
												/>
											</div>

											<div>
												<label htmlFor="birthDate">
													Birthdate &nbsp;
													<span title="Required" className="text-red-600">
														*
													</span>
												</label>
												<input
													id="birthDate"
													name="birthDate"
													type="date"
													className="mt-2 w-full"
													value={formState.birthDate || ''}
													onChange={handleChange}
													required
												/>
											</div>

											<div className="sm:col-span-2">
												<label htmlFor="address">
													Address &nbsp;
													<span title="Required" className="text-red-600">
														*
													</span>
												</label>
												<input
													id="address"
													name="address"
													type="text"
													className="mt-2 w-full"
													value={formState.address || ''}
													onChange={handleChange}
													required
												/>
											</div>
										</div>

										<footer className="my-8 flex gap-x-4">
											<Button
												type="submit"
												title="Add new person"
												className="btn-primary"
												disabled={!canSave}
											>
												{addRequestStatus === 'pending' ? (
													<>
														<Spinner className="animate-spin -ml-1 mr-3 h-5 w-5" />
														Processing...
													</>
												) : (
													'Add person'
												)}
											</Button>

											<Button
												title="Cancel operation"
												className="btn-danger"
												onClick={closeModal}
											>
												Cancel
											</Button>
										</footer>
									</form>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default ModalNewPerson;
