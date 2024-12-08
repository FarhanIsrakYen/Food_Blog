import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";
const HomePage = () => {
  return (
    <body className="index-page">
      <Header />
      <main className="main">
        <HeroSection />
        <WhyUs />
        <Stats />
        <Blogs />
      </main>
      <Footer />
    </body>
  );
};

export default HomePage;
