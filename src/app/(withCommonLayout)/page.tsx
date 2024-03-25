import Brand from "@/component/brand/brand";
import FlashSale from "@/component/flashSale/flashSale";
import Footer from "@/component/footer/footer";
import Hero from "@/component/hero/hero";
import Moment from "@/component/moment/moment";
import News from "@/component/news/news";
import TrendingProduct from "@/component/trendingProduct/trendingProduct";
import WhatWeDo from "@/component/whatWeDo/whatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <FlashSale />
      <TrendingProduct />
      <Brand />
      <Moment />
      <News />
      <Footer />
    </div>
  );
}
