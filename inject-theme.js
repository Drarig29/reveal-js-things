// https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md

var themes = ['black', 'beige', 'blood', 'league', 'moon', 'night', 'serif', 'simple', 'sky', 'solarized', 'white'];
var themeStr = themes.map((elem, index) => `${elem} (${index})`).join(', ');

function setTheme(index) {
  const selectedTheme = themes[index];
  const themeLink = document.querySelector('head > link[href^="css/theme"]');
  const src = themeLink.href.replace(/.*(css\/theme)\/(\w+).css/, `$1/${selectedTheme}.css`);
  themeLink.href = src;
}

function changeTheme() {
  const number = prompt(`Entrez le numéro d'un thème [${themeStr}]`, 0).trim();
  if (number.match(/^\d+$/))
    setTheme(number);
  else
    alert("Ce n'est pas un numéro valide !");
}

changeTheme();
