'use client';
import { Discount } from './discount';
import { Getstarted } from './getstarted';
import { Listcount } from './listcount';
import Image from 'next/image';

export const HomeWrapper = () => {
	return (
		<section id="Home" className="flex flex-col py-5 mb-1 lg:mb-20  ">
			<div className="px-6 md:px-16">
				<Discount />
			</div>
			<div className="sm:px-16 px-6 flex justify-between ">
				<div className=" grid lg:grid-cols-2  grid-cols-1 w-full ">
					<div className="max-w-[450px] relative">
						<h1 className="lg:text-[50px] mt-5 font-semibold text-white text-[3rem] mw leading-snug">
							The Next <span className=" text-gradient">Generation</span>
							<br /> Payment Method.
						</h1>
						<p className="  lg:block text-gray-400 mt-5 text-[18px]  ">
							Our team of experts uses a methodology to identify the credit
							cards most likely to fit your needs. We examine annual percentage
							rates, annual fees.
						</p>
						<div className="absolute top-[-20px] right-[0%] hidden lg:block">
							<Getstarted />
						</div>
					</div>

					<div className=" hidden lg:block">
						<Image
							src={'/asset/images/robot.png'}
							width={500}
							height={400}
							alt="hero"
						/>
					</div>
				</div>
			</div>
			<div>
				<div className=" md:hidden absolute bg-gradient-to-t from-[#f4c4f3] to-[#fc67fa] blur-[750px] overflow-hidden  w-[40%] h-[35%] top-0 "></div>
				<div className="absolute md:hidden bg-gradientWhite w-[80%] h-[80%] bottom-40 rounded-full blur-[750px]"></div>
				<div className="container-img lg:hidden">
					<Image
						src={'/asset/images/robot.png'}
						width={1000}
						height={1000}
						alt="hero"
					/>
				</div>
			</div>
			<div className="lg:hidden block">
				<Getstarted />
			</div>
			<ul className="lg:flex-row flex-col text-white flex justify-center items-center  flex-wrap sm:mb-20 mb-6 mt-10 px-16 ">
				<Listcount labelP="USER ACTIVE" labelSpan="3800+" />
				<Listcount labelP="TRUSTED BY COMPANIES" labelSpan="230+" />
				<Listcount labelP="TRANSACTION" labelSpan="$230M+" />
			</ul>
		</section>
	);
};
