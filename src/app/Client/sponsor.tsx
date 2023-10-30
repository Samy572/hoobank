import Image from 'next/image';

interface Props {
	img: string;
	alt: string;
}
const Sponsor = ({ img, alt }: Props) => {
	return (
		<div className="object-contain m-5">
			<Image src={img} width={120} height={120} alt={alt} />
		</div>
	);
};
export default Sponsor;
