import {
  Hero,
  Navbar,
  FeatureHighLightsSection,
  ProductGrid,
  CategorySection,
} from "@/components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHighLightsSection />
      <ProductGrid />
      <CategorySection />
    </>
  );
};

export default HomePage;
