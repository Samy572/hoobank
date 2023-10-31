import Client from './Client/client';
import { Feature } from './Feature/feature';
import Footer from './Footer/footer';
import { HomeWrapper } from './Home/homewrapper';
import Product from './Product/product';

export default function Home() {
	return (
		<div>
			<HomeWrapper />
			<Feature />
			<Product />
			<Client />
			<Footer />
		</div>
	);
}
