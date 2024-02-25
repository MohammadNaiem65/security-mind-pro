import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';

import { logo } from '../assets';

export default function Navbar() {
	return (
		<nav className='h-[4.375rem] flex justify-between items-center'>
			<Link to='https://securitymindpro.com/' className='cursor-pointer'>
				<img className='w-44' src={logo} alt='Security Mind Pro Logo' />
			</Link>
			<div className='font-roboto text-[14px] flex items-center gap-x-[1.5rem] uppercase'>
				<Link
					to='https://securitymindpro.com/'
					className='max-w-fit px-1 border-transparent hover:border-primary border-b-2 cursor-pointer'>
					Home
				</Link>
				<Link
					to='/courses'
					className='w-fit px-1 border-transparent hover:border-primary border-b-2 cursor-pointer'>
					Courses
				</Link>
				<Link
					to='https://securitymindpro.com/about-us/'
					className='w-fit px-1 border-transparent hover:border-primary border-b-2 cursor-pointer'>
					About Us
				</Link>
				<span className='w-fit px-1 flex items-center gap-x-1 border-b-2 border-transparent hover:border-primary relative cursor-pointer group'>
					Services
					<IoIosArrowDown />
					<div className='w-64 h-24 px-8 py-4 hidden flex-col justify-center gap-y-2 absolute top-6 text-[1rem] normal-case group-hover:flex duration-300'>
						<Link to='/consult' className='hover:text-primary'>
							Live Consultation
						</Link>
						<Link
							to='https://securitymindpro.com/faqs/'
							className='hover:text-primary'>
							FAQs
						</Link>
					</div>
				</span>
				<Link
					to='https://securitymindpro.com/blog/'
					className='w-fit px-1 border-transparent hover:border-primary border-b-2 cursor-pointer'>
					Blog
				</Link>
				<Link
					to='https://securitymindpro.com/shop/'
					className='w-fit px-1 border-transparent hover:border-primary border-b-2 cursor-pointer'>
					Shop
				</Link>
				<Link
					to='https://securitymindpro.com/contact/'
					className='w-fit px-1 border-transparent hover:border-primary border-b-2 cursor-pointer'>
					Contact
				</Link>
				<Link className='text-xl cursor-pointer duration-200 hover:text-primary'>
					<ImSearch className='' />
				</Link>
			</div>
		</nav>
	);
}
