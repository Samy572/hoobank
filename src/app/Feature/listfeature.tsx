import Image from 'next/image';
interface Props {
	img: string;
	title: string;
	text: string;
}

const ListFeature = ({ img, title, text }: Props) => {
	return (
		<div className="md:p-6  p-4 mt-10 grid grid-cols-[70px,1fr] justify-center gap-x-3  hover:bg-gradient-to-r from-[#272525] to-slate-900 rounded-xl ">
			<div className=" w-[60px] h-[60px] flex justify-center rounded-full  bg-sahdowBlue">
				<Image src={img} width={30} height={30} alt="hero" />
			</div>

			<div>
				<div className=" text-gray-400 ">
					<h3 className="text-white mb-1 text-lg">{title}</h3>
					<p className="text-[18px] leading-normal">{text}</p>
				</div>
			</div>
		</div>
	);
};
export default ListFeature;
