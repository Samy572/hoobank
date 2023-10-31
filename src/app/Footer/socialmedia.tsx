import Image from 'next/image';

interface Props {
	img: string;
}
const Socialmedia = ({ img }: Props) => {
	return (
		<li className="mx-3 pt-2 h-12 ">
			<Image src={img} width={20} height={20} alt="logo" />
		</li>
	);
};
export default Socialmedia;
