import Clientlist from './clientlist';
import Sponsor from './sponsor';
import Button from '@/components/ui/button';

const Client = () => {
	return (
		<section id="Clients" className="px-6 sm:px-16 mt-6 relative">
			<div className="lg:grid lg:grid-cols-2 lg:items-center lg:my-14">
				<h2 className="font-poppins font-semibold sm:text-[48px] text-[40px] text-white sm:leading-[76.8px] leading-[66.8px] w-full">
					What People are <br className="sm:block hidden" /> saying about us
				</h2>
				<p className="mt-6 text-gray-400  text-[18px] leading-[30.8px] text-left max-w-[450px]">
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div className="container-client-list py-6 flex flex-wrap justify-between lg:grid lg:grid-cols-3 lg:py-14 ">
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
				<div className=" radial-gradient absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 sm:hidden"></div>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 items-center flex-wrap">
				<Sponsor img={'/asset/images/airbnb.png'} alt="aribnb" />
				<Sponsor img={'/asset/images/binance.png'} alt="binance" />
				<Sponsor img={'/asset/images/coinbase.png'} alt="coinbase" />
				<Sponsor img={'/asset/images/dropbox.png'} alt="dropbox" />
			</div>
			<div className="flex flex-col lg:grid lg:grid-cols-3 bg-gradient-to-r from-[#272525] to-slate-900 sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 mt-20  rounded-[20px] box-shadow ">
				<div className="lg:col-span-2">
					<h2 className="font-semibold flex sm:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ">
						Let's tryout <br className="sm:hidden block " /> service now.
					</h2>
					<p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
						Everything you need to accept card payments and grow your business
						anywhere on the planet.{' '}
					</p>
				</div>
				<div className="flex justify-center  lg:justify-end h-fit lg:my-auto ">
					<Button label="Get Started" />
				</div>
			</div>
		</section>
	);
};
export default Client;
