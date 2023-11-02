'use client';
import { Navbar } from '@/components/navbar';
import Client from './Client/client';
import { Feature } from './Feature/feature';
import Footer from './Footer/footer';
import { HomeWrapper } from './Home/homewrapper';
import Paymethod from './PayMethod/paymethod';
import Product from './Product/product';
import Mobilenav from '@/components/mobilenav';
import { useState } from 'react';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="xl:max-w-[1620px] mx-auto overflow-x-hidden ">
			<Navbar isOpen={isOpen} onClick={handleClick} setIsOpen={setIsOpen} />
			{isOpen && <Mobilenav />}
			<HomeWrapper />
			<Feature />
			<Paymethod />
			<Product />
			<Client />
			<Footer />
		</div>
	);
}
