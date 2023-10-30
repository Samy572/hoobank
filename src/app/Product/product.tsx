import Image from 'next/image';

const Product = () => {
	return (
		<section id="Product" className="mt-6 px-6">
			<h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
				Easily control your <br className="sm:block hidden" /> billing &
				invoicing
			</h2>
			<p className="text-gray-400 mt-5 text-lg leading-[30.8px]">
				Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
				neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
			</p>

			<div className="mt-6 flex flex-wrap justify-center gap-x-2">
				<div>
					<Image
						src={'/asset/svg/playstore.svg'}
						width={130}
						height={100}
						alt="hero"
					/>
				</div>
				<div className="">
					<Image
						src={'/asset/svg/apple.svg'}
						width={130}
						height={100}
						alt="hero"
					/>
				</div>
			</div>
			<div className="w-full mt-6 flex justify-center">
				<Image
					src={'/asset/images/pay.png'}
					width={700}
					height={700}
					alt="hero"
				/>
			</div>
		</section>
	);
};
export default Product;
