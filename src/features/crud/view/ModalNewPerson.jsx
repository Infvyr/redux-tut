import { Dialog, Transition } from '@headlessui/react';
import Button from 'components/Button';
import { initialFormState } from 'features/crud/context/Crud.context';
import { addNewPerson } from 'features/crud/slices/peopleSlice';
import { Fragment, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Spinner } from 'assets/images/spinner.svg';

const initialAddRequestStatus = 'idle';

function ModalNewPerson({ isOpen, closeModal }) {
	const dispatch = useDispatch();

	const [form, setForm] = useState(initialFormState);
	const [addRequestStatus, setAddRequestStatus] = useState(
		initialAddRequestStatus
	);

	const onNameChanged = e => setForm({ ...form, name: e.target.value });
	const onCityChanged = e => setForm({ ...form, city: e.target.value });
	const onEmailChanged = e => setForm({ ...form, email: e.target.value });
	const onCompanyNameChanged = e =>
		setForm({ ...form, companyName: e.target.value });

	const canSave = useMemo(() => {
		return (
			[form.companyName, form.email, form.city, form.name].every(Boolean) &&
			addRequestStatus === 'idle'
		);
	}, [addRequestStatus, form.city, form.companyName, form.email, form.name]);

	const onAddNewPerson = e => {
		e.preventDefault();

		if (canSave) {
			try {
				setAddRequestStatus('pending');

				dispatch(
					addNewPerson({
						name: form.name?.trim(),
						address: { city: form.city?.trim() },
						email: form.email?.trim(),
						company: { name: form.companyName?.trim() },
					})
				).unwrap();

				setForm(initialFormState);
				closeModal();
			} catch (e) {
				console.error('Failed to create new person', e);
			} finally {
				setAddRequestStatus(initialAddRequestStatus);
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
											href="https://jsonplaceholder.typicode.com"
											title="Open source API"
											rel="noopener, nofollow noreferrer"
											className="underline-offset-4 underline"
											target="_blank"
										>
											Jsonplaceholder users api
										</a>
									</p>
								</Dialog.Title>

								<div className="px-6 pt-3">
									<form onSubmit={onAddNewPerson}>
										<div className="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
											<div>
												<label htmlFor="name">Name</label>
												<input
													id="name"
													type="text"
													className="mt-2 w-full"
													value={form.name || ''}
													onChange={onNameChanged}
													required
												/>
											</div>

											<div>
												<label htmlFor="city">City</label>
												<input
													id="city"
													type="text"
													className="mt-2 w-full"
													value={form.city || ''}
													onChange={onCityChanged}
													required
												/>
											</div>

											<div>
												<label htmlFor="email">Email</label>
												<input
													id="email"
													type="email"
													className="mt-2 w-full"
													value={form.email || ''}
													onChange={onEmailChanged}
													required
												/>
											</div>

											<div>
												<label htmlFor="company-name">Company Name</label>
												<input
													id="company-name"
													type="text"
													className="mt-2 w-full"
													value={form.companyName || ''}
													onChange={onCompanyNameChanged}
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
