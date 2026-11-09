// Soft entrance when a section comes into view: its blocks fade up once.
// Enough to feel the change of section, without moving things around.
export function startReveal() {
  const blocks = document.querySelectorAll('main > section:not(.hero) > *, main > article > section:not(.hero) > *, .sitefoot > *');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
  blocks.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  return () => io.disconnect();
}
