'use client';
import Image from 'next/image';

export const Navbar = ({
	onClick,
	isOpen,
	setIsOpen,
}: {
	onClick: () => void;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<nav className="flex justify-between px-6 py-6 sm:px-16">
			<div>
				<Image
					src={'./asset/svg/logo.svg'}
					width={100}
					height={35}
					alt="logo-hoobank"
				/>
			</div>
			<ul className="text-white sm:flex justify-between hidden  z-20  w-[370px]">
				<li>
					<a href="#Home">Home</a>
				</li>
				<li>
					<a href="#Features">Features</a>
				</li>
				<li>
					<a href="#Product">Product</a>
				</li>
				<li>
					<a href="#Clients">Clients</a>
				</li>
			</ul>
			{isOpen === false ? (
				<button onClick={onClick} className="cursor-pointer sm:hidden">
					<Image src="./asset/svg/menu.svg" width={25} height={25} alt="menu" />
				</button>
			) : (
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="cursor-pointer sm:hidden"
				>
					<Image
						src="./asset/svg/close.svg"
						width={25}
						height={25}
						alt="close"
					/>
				</button>
			)}
		</nav>
	);
};
