import Banner from './banner'
import Categories from './categories'
import HeroSection from './hero-section'
import TrendingProducts from '../shop/trending-products'

export default function Home() {
	return (
		<>
			<Banner />
			<Categories />
			<HeroSection />
			<TrendingProducts />
		</>
	)
}
