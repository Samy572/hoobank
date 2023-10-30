import React from 'react';
import { Discount } from './discount';
import { Getstarted } from './getstarted';
import { Listcount } from './listcount';
import Image from 'next/image';

export const HomeWrapper = () => {
	return (
		<section id="Home" className="flex flex-col py-5 mb-1">
			<div className="sm:px-20 px-6">
				<Discount />
				<h1 className="mt-5 font-semibold text-white text-[3.3rem] leading-snug">
					The Next <span className=" text-gradient">Generation</span> Payment
					Method.
				</h1>
				<div>
					<p className="text-gray-400 mt-5 text-lg">
						Our team of experts uses a methodology to identify the credit cards
						most likely to fit your needs. We examine annual percentage rates,
						annual fees.
					</p>
				</div>
			</div>
			<div className="mt-8 ">
				<Image
					src={'/asset/images/robot.png'}
					width={700}
					height={700}
					alt="hero"
				/>
			</div>
			<Getstarted />
			<ul className="text-white flex flex-col mt-20 gap-y-5 ">
				<Listcount labelP="USER ACTIVE" labelSpan="3800+" />
				<Listcount labelP="TRUSTED BY" labelSpan="230+" />
				<Listcount labelP="TRANSACTION" labelSpan="$230M+" />
			</ul>
		</section>
	);
};
