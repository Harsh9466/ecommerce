import Header from "@/components/custom/Header";
import LandingCarousel from "@/components/custom/LandingCarousel";
import Product from "@/components/custom/Product";
import TaxonomiesHeader from "@/components/custom/TaxonomiesHeader";

export default function Home() {
  return (
    <>
      <Header />
      <TaxonomiesHeader />
      <LandingCarousel />
      <Product />
    </>
  );
}
