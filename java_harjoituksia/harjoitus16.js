const tuote = {
  nimi: 'Näppäimistö',
  hinta: 79,
  saatavilla: true
};

const products = document.querySelector('.products');

const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const button = document.createElement('button');

h2.textContent = tuote.nimi;
p.textContent = `${tuote.hinta} €`;
button.textContent = 'Osta';

if (!tuote.saatavilla) {
  article.classList.add('sold-out');
}

article.appendChild(h2);
article.appendChild(p);
article.appendChild(button);
products.appendChild(article);