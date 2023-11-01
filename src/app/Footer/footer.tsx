import List from './list';
import Listfooter from './listfooter';
import Socialmedia from './socialmedia';

const Footer = () => {
	const listsocial = {
		insta: '/asset/svg/insta.svg',
		facebook: '/asset/svg/fb.svg',
		twitter: '/asset/svg/twitter.svg',
		linkedin: '/asset/svg/linkedin.svg',
	};
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div>
			<List />
			<div className="align-middle mx-6 sm:px-16 mt-6 border-t border-gray-400">
				<div className=" w-full  lg:flex lg:justify-between  lg:text-left py-4 text-center text-lg">
					<h4 className="text-white">
						Copyright © {year} HooBank. All <br /> Rights Reserved.
					</h4>
					<ul className="flex justify-center  ">
						{Object.entries(listsocial).map(([key, value]) => {
							return <Socialmedia key={key} img={value} />;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Footer;
