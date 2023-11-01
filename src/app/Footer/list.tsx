import Image from 'next/image';
import Listfooter from './listfooter';

const List = () => {
	const listFooter = {
		useFull: [
			'Content',
			'How it Works',
			'Create',
			'Explore',
			'Terms of Service',
		],
		Community: [
			'Help Center',
			'Partners',
			'Suggestions',
			'Blog',
			'Newsletters',
		],
		Partner: ['Our Partner', 'Become a Partner'],
	};
	return (
		<div className="px-6 lg:px-16 lg:grid grid-cols-2 ">
			<div className="flex flex-col py-6 ">
				<div>
					<Image
						src={'/asset/svg/logo.svg'}
						width={270}
						height={270}
						alt="logo"
					/>
				</div>
				<p className="text-gray-400 mt-5  leading-[30.8px]">
					A new way to make the <br /> payments easy, reliable and
					<br /> secure.
				</p>
			</div>
			<div className="grid grid-cols-2 flex-wrap md:grid-cols-3 lg:w-full ">
				<Listfooter list={listFooter.useFull} title={'Useful Links'} />
				<Listfooter list={listFooter.Community} title="Community" />
				<Listfooter list={listFooter.Partner} title="Partner" />
			</div>
		</div>
	);
};
export default List;
