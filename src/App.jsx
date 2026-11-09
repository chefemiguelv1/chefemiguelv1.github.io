import { useEffect, useState } from 'react';
import Header from './v1/Header.jsx';
import { startReveal } from './reveal.js';
import { Hero, Chef } from './v1/Intro.jsx';
import Restaurants from './v1/Restaurants.jsx';
import Wines from './v1/Wines.jsx';
import { Path, Books, Press, Gallery } from './v1/Sections.jsx';
import { Instagram, Contact, Footer } from './v1/Closing.jsx';
import HousePage from './v1/HousePage.jsx';
import { HOUSES } from './data/houses.js';
import { LightboxProvider } from './lightbox.jsx';
import './styles/v1.css';
import './styles/extra.css';

// "#/casario" opens that restaurant's page; any other hash is a section of the home page.
const houseFromHash = () => {
  const m = location.hash.match(/^#\/([\w-]+)/);
  return m && HOUSES.some((h) => h.id === m[1]) ? m[1] : null;
};

export default function App() {
  const [house, setHouse] = useState(houseFromHash);

  useEffect(() => {
    const onHash = () => setHouse(houseFromHash());
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);

  // after each page change: go to the top (or to the section asked for) and start the entrances
  useEffect(() => {
    const target = !house && location.hash.length > 1 && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView(); else scrollTo(0, 0);
    document.title = house ? HOUSES.find((h) => h.id === house).name + ' · Miguel Castro e Silva' : 'Miguel Castro e Silva · Cozinheiro';
    return startReveal();
  }, [house]);

  return (
    <LightboxProvider>
      <Header />
      <main id="top">
        {house ? <HousePage key={house} id={house} /> : (
          <>
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
          </>
        )}
      </main>
      <Footer />
    </LightboxProvider>
  );
}
