import { logo } from '../assets';

export default function Navbar() {
	return (
		<nav className='flex justify-between'>
			<img className='w-44' src={logo} alt='Security Mind Pro Logo' />
			<div className='font-roboto-slap divide-x-[1rem] divide-transparent'>
				<span>Home</span>
				<span>Courses</span>
				<span>About Us</span>
				<span>Services</span>
				<span>Blog</span>
				<span>Shop</span>
				<span>Contact</span>
			</div>
		</nav>
	);
}
