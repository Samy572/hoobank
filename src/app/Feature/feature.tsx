import Button from '@/components/ui/button';
import Image from 'next/image';
import ListFeature from './listfeature';

export const Feature = () => {
	return (
		<section id="Features" className=" overflow-hidden px-6 pt-10 relative ">
			<h2 className="font-semibold text-white xs:leading-[76px] leading-[66.8px] text-[40px]">
				You do the business, we'll handle the money.
			</h2>
			<p className="text-gray-400 mt-5 text-lg leading-[30.8px] max-w-[470px] ">
				With the right credit card, you can improve your financial life by
				building credit, earning rewards and saving money. But with hundreds of
				credit cards on the market.
			</p>
			<Button label="Get Started" />
			<ListFeature
				img="/asset/svg/star.svg"
				title="Rewards"
				text="The best credit cards offer some tantalizing combinations of promotions and prizes."
			/>
			<ListFeature
				img="/asset/svg/secure.svg"
				title="100% Secured"
				text="We take proactive steps make sure your information and transactions are secure."
			/>
			<ListFeature
				img="/asset/svg/send.svg"
				title="Balance Transfer"
				text="A balance transfer credit card can save you a lot of money in interest charges."
			/>
			<div className=" radial-gradient absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 "></div>
		</section>
	);
};
