import { useEffect } from 'react';
import {
  Grain, Bar, Drawer, Hero, Chef, Path, Dishes, Restaurants,
  Books, Press, Gallery, Instagram, Contact, Footer, Lightbox
} from './components';

// The page behaviour (language, rails, lightbox, Instagram feed...) is the same
// code as the static site. It runs once React has put the markup on the page.
const SCRIPTS = ['assets/js/data.js', 'assets/js/site.js', 'assets/ig/feed.js', 'assets/js/instagram.js'];

function loadInOrder(list) {
  return list.reduce((done, src) => done.then(() => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('Could not load ' + src));
    document.body.appendChild(s);
  })), Promise.resolve());
}

export default function App() {
  useEffect(() => {
    if (window.__mcsStarted) return;
    window.__mcsStarted = true;
    loadInOrder(SCRIPTS).catch((e) => console.error(e));
  }, []);

  return (
    <>
      <Grain />
      <Bar />
      <Drawer />
      <main id="top">
        <Hero />
        <Chef />
        <Path />
        <Dishes />
        <Restaurants />
        <Books />
        <Press />
        <Gallery />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
