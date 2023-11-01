import Image from 'next/image';

interface Props {
	img: string;
	alt: string;
}
const Sponsor = ({ img, alt }: Props) => {
	return (
		<div className="object-contain m-5">
			<Image src={img} width={150} height={150} alt={alt} />
		</div>
	);
};
export default Sponsor;
