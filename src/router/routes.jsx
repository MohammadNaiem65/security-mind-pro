import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
const Courses = lazy(() => import('../pages/Courses'));
const CyberSecurityBootcamp = lazy(() =>
	import('../components/Courses/CyberSecurityBootcamp')
);

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/courses',
				element: <Courses />,
			},
			{
				path: '/courses/cyber-security-bootcamp',
				element: <CyberSecurityBootcamp />,
			},
		],
	},
]);

export default routes;
