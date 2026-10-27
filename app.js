(() => {
 'use strict';
 const visores = window.PORTAL_VISORES;
 const cards = document.getElementById('cards');
 const search = document.getElementById('search');
 const count = document.getElementById('resultCount');
 const empty = document.getElementById('empty');
 const controls = [...document.querySelectorAll('[data-topic]')];
 const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
 let current = 'all';
 const icons = {
  chart: '<path d="M4 20V10m6 10V4m6 16v-8m6 8H2"/>',
  vaccine: '<path d="m15 3 6 6m-4-4L7 15m7-11 6 6M5 13l6 6m-8 2 4-6m2-8 8 8m-6-6 3-3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3 12h5l2-4 3 8 2-4h6"/>',
  ribbon: '<path d="M8 4c2-3 6-3 8 0 2 4-2 9-9 17l-4-4C13 8 17 3 12 3S11 10 21 17l-4 4C10 13 6 8 8 4Z"/>',
  people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4M17 4a3 3 0 0 1 0 6m2 11v-4a6 6 0 0 0-3-5"/>'
 };
 const element = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
 };
 const rendered = visores.map(visor => {
  const article = element('article', 'card');
  article.dataset.id = visor.id;
  const top = element('div', 'card-top');
  const icon = element('div', 'card-icon tone-' + visor.tono);
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = '<svg viewBox="0 0 24 24">' + icons[visor.icono] + '</svg>';
  top.append(icon, element('span', 'status', '● Publicado'));
  const heading = element('h3');
  heading.id = 'title-' + visor.id;
  heading.textContent = visor.nombre;
  article.setAttribute('aria-labelledby', heading.id);
  const tags = element('div', 'tags');
  tags.append(element('span', 'tag period', visor.periodo));
  visor.tags.forEach(tag => tags.append(element('span', 'tag', tag)));
  const foot = element('div', 'card-foot');
  const link = element('a', 'open', 'Abrir visor ');
  link.href = visor.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Abrir ' + visor.nombre + ' (nueva pestaña)');
  link.append(element('span', '', '↗'));
  foot.append(element('span', 'updated', visor.tema), link);
  article.append(top, heading, element('p', '', visor.descripcion), tags, element('p', 'note', visor.nota), foot);
  cards.append(article);
  return { article, visor, text: normalize([visor.nombre, visor.tema, visor.descripcion, visor.periodo, visor.nota, visor.busqueda, ...visor.tags].join(' ')) };
 });
 function filterCards() {
  const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
  let visible = 0;
  rendered.forEach(({ article, visor, text }) => {
   const match = (current === 'all' || visor.temas.includes(current)) && words.every(word => text.includes(word));
   article.classList.toggle('hide', !match);
   if (match) visible++;
  });
  count.textContent = visible + (visible === 1 ? ' visor disponible' : ' visores disponibles');
  empty.hidden = visible !== 0;
  controls.forEach(control => {
   const selected = control.dataset.topic === current;
   if (control.tagName === 'BUTTON') {
    control.classList.toggle('selected', selected);
    control.setAttribute('aria-pressed', String(selected));
   } else {
    control.classList.toggle('active', selected);
    if (selected) control.setAttribute('aria-current', 'true');
    else control.removeAttribute('aria-current');
   }
  });
 }
 controls.forEach(control => control.addEventListener('click', event => {
  event.preventDefault();
  current = control.dataset.topic;
  filterCards();
  if (control.tagName === 'A') document.getElementById('visores').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
 }));
 search.addEventListener('input', filterCards);
 document.getElementById('clearFilters').addEventListener('click', () => {
  current = 'all'; search.value = ''; filterCards(); search.focus();
 });
 document.querySelector('.brand').addEventListener('click', () => {
  current = 'all'; search.value = ''; filterCards();
 });
 filterCards();
})();
