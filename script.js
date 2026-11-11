// Progressive enhancement: navigation also works if JavaScript is unavailable.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
menuButton.hidden = false;

function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.navbar')) closeMenu();
});
window.matchMedia('(max-width: 850px)').addEventListener('change', () => closeMenu());

// Update the footer without requiring a yearly HTML edit.
document.querySelector('#year').textContent = new Date().getFullYear();

// Track the section nearest the header, including long sections and page end.
const navLinks = [...navigation.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main > section[id]')];
let scrollQueued = false;
function updateActiveLink() {
  const headerOffset = document.querySelector('.site-header').offsetHeight + 80;
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= headerOffset) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = 'contact';
  // Hobbies is part of the wider interests area in the primary navigation.
  if (current === 'hobbies') current = 'interests';
  if (current === 'philosophy') current = 'about';
  navLinks.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; window.requestAnimationFrame(updateActiveLink); }
}, { passive: true });
window.addEventListener('resize', updateActiveLink);
updateActiveLink();

// Theme preference follows the OS until the visitor makes an explicit choice.
const themeButton = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
function isDarkTheme() {
  return document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : systemTheme.matches;
}
function updateThemeControl() {
  const dark = isDarkTheme();
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark';
  document.querySelector('meta[name="theme-color"]').content = dark ? '#101010' : '#FFFFFF';
}
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const theme = isDarkTheme() ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('ram-theme', theme); } catch (error) { /* Toggle still works. */ }
  updateThemeControl();
});
systemTheme.addEventListener('change', updateThemeControl);
updateThemeControl();
