import nancy from './imgs/msnancy.png'
import jooe from './imgs/joober.png'
import taeyeon from './imgs/taeyeon.png'
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

    createCard(content, nancy, 'Nancy Jewel Mcdonie', 'The queen bee herself', 'member');
    createCard(content, jooe, 'Lee Joo-won', 'Our delivery service', 'member');
    createCard(content, taeyeon, 'Kim Tae-yeon', 'A darling, a masterpiece, a work of art, unfortunately, not a great singer. Taeyeon is our lead microwave operator.', 'member');



    parent.appendChild(content);

}
