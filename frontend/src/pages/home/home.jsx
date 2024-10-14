import Banner from './banner'
import Categories from './categories'
import HeroSection from './hero-section'
import TrendingProducts from '../shop/trending-products'
import DealsSection from './deals-section'
import PromoBanner from './promo-banner'

export default function Home() {
	return (
		<>
			<Banner />
			<Categories />
			<HeroSection />
			<TrendingProducts />
			<DealsSection />
			<PromoBanner />
		</>
	)
}
