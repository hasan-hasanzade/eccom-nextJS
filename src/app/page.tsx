import HeroSection from '@/components/HeroSection/HeroSection';
import About from '@/components/About/About';
import Banner from '@/components/Banner/Banner';
import Products from '@/components/Products/Products';
import Testimonials from '@/components/Testimonials/Testimonials';
import Offer from '@/components/Offer/Offer';
import Eco from '@/components/Eco/Eco';
import Newsletter from '@/components/Newsletter/Newsletter';
import {BlogsBlock} from '@/components/BlogsBlock/BlogsBlock';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <About />
      <Products />
      <Testimonials />
      <Offer />
      <Eco />
      <BlogsBlock />
      <Newsletter />
    </>
  );
}
