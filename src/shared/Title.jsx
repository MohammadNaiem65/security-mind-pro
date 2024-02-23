import { Helmet } from 'react-helmet-async';

export default function Title({ children }) {
	return (
		<Helmet>
			<title>{children}</title>
		</Helmet>
	);
}
