import Image from 'next/image';

interface Props {
	img: string;
	text: string;
	name: string;
}

const Clientlist = ({ img, text, name }: Props) => {
	return (
		<div className="quote flex flex-col mt-2 px-10 py-12 text-white">
			<div className="img-container">
				<Image
					src={'/asset/svg/quote.svg'}
					width={60}
					height={60}
					alt="quote"
				/>
			</div>
			<div className="text my-10 ">
				<p className="leading-[32px]">{text}</p>
			</div>
			<div className="author flex items-center gap-x-4">
				<div className="container-img">
					<Image src={img} width={50} height={50} alt="author" />
				</div>
				<div className="container-name">
					<h5 className="text-lg">{name}</h5>
					<p className="text-gray-400">Founder & Leader</p>
				</div>
			</div>
		</div>
	);
};
export default Clientlist;
