interface Props {
	list: string[];
	title: string;
}
const Listfooter = ({ list, title }: Props) => {
	return (
		<ul className="mt-5 ">
			<h3 className="text-white mb-3 text-lg ">{title}</h3>
			{list.map((item, index) => (
				<li
					className="text-gray-400 w-fit mb-3 transition-colors hover:text-secondary "
					key={index}
				>
					{item}
				</li>
			))}
		</ul>
	);
};
export default Listfooter;
