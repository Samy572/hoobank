import Button from '@/components/ui/button';
import Image from 'next/image';

const Paymethod = () => {
	return (
		<div className="px-6 py-10 sm:px-16 grid grid-cols-1 lg:grid-cols-2  justify-center lg:my-14">
			<div>
				<h2 className="font-semibold sm:text-[48px] text-[40px] text-white sm:leading-[76.8px] leading-[66.8px] max-w-[450px]">
					Find a better card deal in few easy steps.
				</h2>
				<p className="mt-6 text-gray-400  text-[18px] leading-[30.8px] text-left max-w-[450px]">
					Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
					aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
				</p>
				<Button label="Get Started" />
			</div>
			<div className="flex justify-center">
				<Image
					src={'/asset/images/card.png'}
					width={1000}
					height={1000}
					alt="credit-card payment method"
				/>
			</div>
		</div>
	);
};
export default Paymethod;
