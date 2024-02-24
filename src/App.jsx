import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from './shared';

function App() {
	return (
		<main className='px-[10rem] pt-5'>
			<Navbar />
			<div className='min-h-[calc(100dvh-29.475rem)] md:min-h-[calc(100vh-21.5rem)] mt-[7rem] md:mt-[8.5rem] lg:mt-[10rem]'>
				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
			</div>
			<Footer />
		</main>
	);
}

export default App;
