import {
  Hero,
  Navbar,
  FeatureHighLightsSection,
  ProductGrid,
  CategorySection,
  NewsLetterSection,
  TestimonialsSection,
  Footer,
} from "@/components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHighLightsSection />
      <ProductGrid />
      <CategorySection />
      <NewsLetterSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default HomePage;
