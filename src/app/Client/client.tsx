import Image from 'next/image';
import Clientlist from './clientlist';
import Sponsor from './sponsor';

const Client = () => {
	return (
		<section id="Clients" className="px-6 mt-6">
			<h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
				What People <br /> are saying <br /> about us
			</h2>
			<p className="text-gray-400 mt-5 text-lg leading-[30.8px]">
				Everything you need to accept card payments and grow your business
				anywhere on the planet.
			</p>
			<div className="container-client-list py-6">
				<Clientlist
					text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
					img="/asset/images/p1.png"
					name="Hermann Jensen"
				/>
				<Clientlist
					text="Money makes your life easier. If you're lucky to have it, you're lucky."
					img={'/asset/images/p2.png'}
					name="Steve Mark"
				/>
				<Clientlist
					text="it's usually people in the money business, finance, and international trade that are really rich."
					img={'/asset/images/p3.png'}
					name="Kenn Gallagher"
				/>
			</div>
			<div className="flex justify-center items-center w-full flex-wrap">
				<Sponsor img={'/asset/images/airbnb.png'} alt="aribnb" />
				<Sponsor img={'/asset/images/binance.png'} alt="binance" />
				<Sponsor img={'/asset/images/coinbase.png'} alt="coinbase" />
				<Sponsor img={'/asset/images/dropbox.png'} alt="dropbox" />
			</div>
		</section>
	);
};
export default Client;
