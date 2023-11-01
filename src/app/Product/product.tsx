import Image from 'next/image';

const Product = () => {
	return (
		<section
			id="Product"
			className="sm:px-16 mt-6 px-6 relative lg:grid lg:grid-cols-2 lg:justify-center"
		>
			<div className="lg:flex lg:flex-col lg:justify-center lg:order-2">
				<h2 className="font-semibold md:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
					Easily control your <br className="sm:block hidden" /> billing &
					invoicing
				</h2>
				<p className="text-gray-400 text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>

				<div className="sm:justify-start  mt-6 flex flex-wrap justify-center gap-x-2">
					<div>
						<Image
							src={'/asset/svg/playstore.svg'}
							width={130}
							height={100}
							alt="hero"
						/>
					</div>
					<div>
						<Image
							src={'/asset/svg/apple.svg'}
							width={130}
							height={100}
							alt="hero"
						/>
					</div>
				</div>
			</div>
			<div className="lg:mr-28 w-full mt-6 flex justify-center relative">
				<Image
					src={'/asset/images/pay.png'}
					width={500}
					height={500}
					alt="hero"
				/>
			</div>
			<div className="bg- absolute z-10 -left-1/2 top-0 w-[50%] h-[50%] rounded-full "></div>
			<div className="red absolute z-[10] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full"></div>
		</section>
	);
};
export default Product;
