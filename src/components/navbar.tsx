'use client';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="max-w-[1170px] flex justify-between px-6 py-6 sm:px-20">
			<div>
				<Image
					src={'./asset/svg/logo.svg'}
					width={100}
					height={35}
					alt="logo-hoobank"
				/>
			</div>
			<ul className="text-white sm:flex justify-between hidden w-[370px]">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About Us</a>
				</li>
				<li>
					<a href="#home">Features</a>
				</li>
				<li>
					<a href="#home">Solution</a>
				</li>
			</ul>
			{isOpen === false ? (
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="cursor-pointer sm:hidden"
				>
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
