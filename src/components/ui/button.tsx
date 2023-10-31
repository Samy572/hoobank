interface Props {
	label: string;
}
const Button = ({ label }: Props) => {
	return (
		<button
			className={
				'blue-gradient py-4 px-6  rounded-lg outline-none mt-5 text-[18px] '
			}
		>
			{label}
		</button>
	);
};
export default Button;
