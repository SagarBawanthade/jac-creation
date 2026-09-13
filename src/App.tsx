import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Framework from './components/Framework';
import SelectedWork from './components/SelectedWork';
import FeaturedProjects from './components/FeaturedProjects';
import BrandStatement from './components/BrandStatement';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <Philosophy />
      <Framework />
      <SelectedWork />
      <FeaturedProjects />
      <BrandStatement />
      <ContactFooter />
    </div>
  );
}