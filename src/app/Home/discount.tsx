import Image from 'next/image';

export const Discount = () => {
	return (
		<div className=" md:h-fit md:py-1 md:w-fit w-full text-lg  flex justify-arround items-center px-3 py-2 h-20 rounded-[10px] bg-gradient-to-r from-[#272525] to-slate-900  ">
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
	);
};
