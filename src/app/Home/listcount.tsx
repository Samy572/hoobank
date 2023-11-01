interface Props {
	labelSpan: string;
	labelP: string;
}
export const Listcount = ({ labelP, labelSpan }: Props) => {
	return (
		<li className="flex-1 flex items-center justify-center md:justify-start flex-row m-3 ">
			<span className="lg:text-[40px] text-white font-semibold  text-[30px]  leading-[43px] overflow-hidden">
				{labelSpan}
			</span>{' '}
			<p className="text-gradient sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase mx-2">
				{labelP}
			</p>
		</li>
	);
};
