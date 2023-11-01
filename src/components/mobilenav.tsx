const Mobilenav = () => {
	return (
		<nav className=" transition-all hidden ">
			<ul className=" translate-y-28 flex p-6 bg-gradient-to-r from-[#272525] to-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex-col text-white">
				<li>
					<a href="#Home">Home</a>
				</li>
				<li>
					{' '}
					<a href="#Features">Features</a>
				</li>
				<li>
					<a href="#Product">Product</a>
				</li>
				<li>
					{' '}
					<a href="#Clients">Clients</a>
				</li>
			</ul>
		</nav>
	);
};
export default Mobilenav;
