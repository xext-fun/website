// Keep the mobile navigation state in sync with its accessible button label.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuButton && nav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    nav.classList.toggle('is-open', !isOpen);
  });
  // A section link, Escape, or a wider viewport should leave the menu closed.
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}
// Avoid updating the copyright year by hand every January.
document.getElementById('year').textContent = new Date().getFullYear();

// Cycle through the joke examples before returning to xext's "anything" idea.
const heroWord = document.querySelector('.hero-word');
if (heroWord) {
  const words = ['browsers.', 'Blender.', 'life.', 'just kidding.', 'anything.'];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let wordIndex = 0;
  let timer;

  const showNextWord = () => {
    heroWord.classList.add('is-exiting');
    timer = window.setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      heroWord.textContent = words[wordIndex];
      heroWord.classList.remove('is-exiting');
      heroWord.classList.add('is-entering');
      timer = window.setTimeout(() => {
        heroWord.classList.remove('is-entering');
        timer = window.setTimeout(showNextWord, 1600);
      }, 360);
    }, 220);
  };

  const syncMotionPreference = () => {
    window.clearTimeout(timer);
    heroWord.classList.remove('is-exiting', 'is-entering');
    if (reducedMotion.matches) {
      heroWord.textContent = 'anything.';
    } else {
      wordIndex = 0;
      heroWord.textContent = words[wordIndex];
      timer = window.setTimeout(showNextWord, 1600);
    }
  };

  reducedMotion.addEventListener('change', syncMotionPreference);
  syncMotionPreference();
}
