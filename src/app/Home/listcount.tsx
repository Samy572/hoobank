interface Props {
	labelSpan: string;
	labelP: string;
}
export const Listcount = ({ labelP, labelSpan }: Props) => {
	return (
		<li className="flex justify-center items-center h-11 gap-x-2">
			<span className="text-3xl  font-semibold">{labelSpan}</span>{' '}
			<p className="text-gradient">{labelP}</p>
		</li>
	);
};
