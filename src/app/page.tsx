import Image from 'next/image';

export default function Home() {
	return (
		<section className="flex flex-col py-5  ">
			<div className="sm:px-20 px-8">
				<div className="w-full text-lg  flex justify-arround items-center px-3 py-2 h-20 rounded-[10px]   bg-gradient-to-r from-[#272525] to-slate-900  ">
					<div className=" w-10 mr-2 ">
						<Image
							src={'./asset/svg/check.svg'}
							width={50}
							height={50}
							alt="discount 20%"
						/>
					</div>
					<h3 className="text-gray-400 font-bold ">
						<span className="text-white">20%</span> DISCOUNT FOR{' '}
						<span className="text-white">1 MONTH </span>ACCOUNT
					</h3>
				</div>
				<h1 className="mt-6 font-semibold text-white text-[3.5rem] leading-tight">
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
			<div className="mt-10 ">
				<Image
					src={'/asset/images/robot.png'}
					width={700}
					height={700}
					alt="hero"
				/>
			</div>
			<div className="cursor-pointer flex justify-center text-gradient  mt-10 text-gray-400 ">
				<div className=" h-32 border-2 border-secondary flex items-center flex-col justify-center w-32  rounded-full">
					<span className="flex">
						Get
						<Image
							className="hover:scale-110 transition-all"
							src={'/asset/svg/arrow.svg'}
							width={30}
							height={30}
							alt="arrow"
						/>{' '}
					</span>
					<span>Started</span>
				</div>
			</div>
			<ul className="text-white flex flex-col mt-20 gap-y-5 ">
				<li className="flex justify-center items-center h-11 gap-x-2">
					<span className="text-3xl  font-semibold">3800+</span>{' '}
					<p className="text-gradient">USER ACTIVE</p>
				</li>
				<li className="flex justify-center items-center h-11 gap-x-2">
					<span className="text-3xl font-semibold">230+</span>{' '}
					<p className="text-gradient">TRUSTED BY COMPANY</p>
				</li>
				<li className="flex justify-center h-11 items-center gap-x-2">
					<span className="text-3xl font-semibold">$230M+</span>{' '}
					<p className="text-gradient">TRANSACTION</p>
				</li>
			</ul>
		</section>
	);
}
