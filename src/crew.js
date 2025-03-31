import placeholder from './imgs/mcdonie.jpg'
import { createCard } from './menu'

export function crew() {
    const parent = document.querySelector('#content');
    const old = document.querySelector('.container');
    if (old) parent.removeChild(old);
    const content = document.createElement('div');
    content.className = 'container';

    const header = document.createElement('h1');
    const subheader = document.createElement('p');


    header.textContent = "Meet the Crew!";
    subheader.textContent = 'Our wonderful patty-flipping employees!';


    content.appendChild(header);
    content.appendChild(subheader);

    createCard(content, placeholder, 'Nancy Jewel Mcdonie', 'The queen bee herself');

    parent.appendChild(content);

}
