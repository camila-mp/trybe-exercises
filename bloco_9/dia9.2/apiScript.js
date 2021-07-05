const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const fetchJ = await (await (fetch(API_URL, { headers: { Accept: 'application/json' } }))).json();
  document.getElementById('jokeContainer').innerText = fetchJ.joke;
}

window.onload = () => fetchJoke();