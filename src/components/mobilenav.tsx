'use client';

const Mobilenav = () => {
	return (
		<nav className=" transition-all  ">
			<ul className=" z-10 slide  flex p-6 bg-gradient-to-r from-[#272525] to-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar flex-col text-white">
				<li className="py-1">
					<a href="#Home">Home</a>
				</li>
				<li className="py-1">
					{' '}
					<a href="#Features">Features</a>
				</li>
				<li className="py-1">
					<a href="#Product">Product</a>
				</li>
				<li className="py-1">
					{' '}
					<a href="#Clients">Clients</a>
				</li>
			</ul>
		</nav>
	);
};
export default Mobilenav;
