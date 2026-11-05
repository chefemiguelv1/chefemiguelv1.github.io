import Header from './v1/Header.jsx';
import { Hero, Chef } from './v1/Intro.jsx';
import Restaurants from './v1/Restaurants.jsx';
import Wines from './v1/Wines.jsx';
import { Path, Books, Press, Gallery } from './v1/Sections.jsx';
import { Instagram, Contact, Footer } from './v1/Closing.jsx';
import { LightboxProvider } from './lightbox.jsx';
import './styles/v1.css';
import './styles/extra.css';

// Version 1 layout (the one Melody and Miguel preferred), with the dishes
// shown under the restaurant where they were born.
export default function App() {
  return (
    <LightboxProvider>
      <Header />
      <main id="top">
        <Hero />
        <Chef />
        <Restaurants />
        <Path />
        <Wines />
        <Books />
        <Press />
        <Gallery />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  );
}
