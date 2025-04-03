import nancy from './imgs/msnancy.png'
import jooe from './imgs/joober.png'
import taeyeon from './imgs/taeyeon.png'
import daisy from './imgs/daisy.png'
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

    createCard(content, nancy, 'Nancy Jewel Mcdonie', 'Nancy Jewel McDonie, the queen behind it all. Her dreams momentarily crushed upon the disbandment of MOMOLAND, Nancy found a new dream in the burger joint industry. Request a tour to see Nancy flip burgers in action!', 'member');
    createCard(content, jooe, 'Lee Joo-won', `JooE, famed participant in Queendom Puzzle where she placed 25th, and former member of MOMOLAND, is our wonderful delivery driver! She runs our "JoobEr Eats" delivery service, making sure your burgers are delivered fresh and hot!`, 'member');
    createCard(content, daisy, 'Yoo Jung-Ahn', 'Daisy. Traitor to the sisterhood but she needed a job. Cashier and microwave operator.', 'member');
    createCard(content, taeyeon, 'Kim Tae-yeon', 'A darling, a masterpiece, a work of art, unfortunately, not a great singer. Taeyeon is our janitor.', 'member');



    parent.appendChild(content);

}
