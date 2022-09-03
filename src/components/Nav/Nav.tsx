import { BiHomeAlt, BiInfoCircle, BiMoviePlay } from 'react-icons/bi';
import NavItem from './NavItem';

const setIconSize = '1.875rem';

const items = [
	{
		label: 'Home',
	 	icon: <BiHomeAlt size={setIconSize}/>,
		active: true
	},
	{
		label: 'Movies',
	 	icon: <BiMoviePlay size={setIconSize}/>,
	},
	{
		label: 'About',
	 	icon: <BiInfoCircle size={setIconSize}/>,
	}
]

const NavItemsContainer = () => (
	<>
	{items.map((item,index) => (
		<NavItem item={item} key={index} />
	))}
	</>
)

const Nav = () => {
	console.log();
	
	return (
		<nav className="col-span-1 bg-cyan-300 ">
			<div className="mx-4">
				<h4 className="uppercase font-bold text-primary text-right border-b border-primary py-4">lolhd.net</h4>
			</div>
			<ul className="mx-4 my-2">
				<NavItemsContainer/>
				
			</ul>
		</nav>
	);
};

export default Nav;