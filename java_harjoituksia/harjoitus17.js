const kurssit = [
  { nimi: 'HTML', taso: 'Perusteet', aktiivinen: true },
  { nimi: 'CSS', taso: 'Perusteet', aktiivinen: true },
  { nimi: 'JavaScript', taso: 'Keskitaso', aktiivinen: true },
  { nimi: 'React', taso: 'Keskitaso', aktiivinen: false },
  { nimi: 'Node.js', taso: 'Jatko', aktiivinen: true }
];

const grid = document.querySelector('.grid');

for (const kurssi of kurssit) {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = kurssi.nimi;
  p.textContent = `Taso: ${kurssi.taso}`;

  article.appendChild(h2);
  article.appendChild(p);

  if (kurssi.aktiivinen) {
    article.classList.add('active');
  } else {
    article.classList.add('inactive');
  }

  grid.appendChild(article);
}