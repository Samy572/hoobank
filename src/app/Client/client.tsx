import Image from 'next/image';
import Clientlist from './clientlist';
import Sponsor from './sponsor';
import Button from '@/components/ui/button';
import Listfooter from './listfooter';

const Client = () => {
	const listFooter = {
		useFull: [
			'Content',
			'How it Works',
			'Create',
			'Explore',
			'Terms of Service',
		],
		Community: [
			'Help Center',
			'Partners',
			'Suggestions',
			'Blog',
			'Newsletters',
		],
		Partner: ['Our Partner', 'Become a Partner'],
	};

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
			<div className='flex flex-col justify-center items-center bg-gradient-to-r from-[#272525] to-slate-900 sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 mt-20 sm:flex-row   rounded-[20px] box-shadow"'>
				<h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
					Let's tryout <br /> service now.
				</h2>
				<p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
					Everything you need to accept card payments and grow your business
					anywhere on the planet.{' '}
				</p>
				<Button label="Get Started" />
			</div>
			<div className="flex flex-col py-6">
				<div>
					<Image
						src={'/asset/svg/logo.svg'}
						width={270}
						height={270}
						alt="logo"
					/>
				</div>
				<p className="text-gray-400 mt-5  leading-[30.8px]">
					A new way to make the <br /> payments easy, reliable and
					<br /> secure.
				</p>
			</div>
			<div className="grid grid-cols-2 flex-wrap md:grid-cols-3">
				<Listfooter list={listFooter.useFull} title={'Useful Links'} />
				<Listfooter list={listFooter.Community} title="Community" />
				<Listfooter list={listFooter.Partner} title="Partner" />
			</div>
		</section>
	);
};
export default Client;
