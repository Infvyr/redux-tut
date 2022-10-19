import { lazy, Suspense } from 'react';

const LazyCounter = lazy(() => import('components/Counter'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<p>Loading...</p>}>
				<LazyCounter />
			</Suspense>
		</div>
	);
}

export default App;
