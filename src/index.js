import generateJoke from './generateJoke'
import './styles/main.scss'
import image from './assets/image.png'

document.getElementById('laughImg').src = image;
document.getElementById('jokeBtn').addEventListener('click', () => {
    generateJoke();
});
generateJoke();