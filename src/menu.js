import placeholder from './imgs/mcdonie.jpg'



export function menu() {
    const parent = document.querySelector('#content');
    const old = document.querySelector('.container');
    if (old) parent.removeChild(old);
    const content = document.createElement('div');
    content.className = 'container';

    const header = document.createElement('h1');
    const subheader = document.createElement('p');


    header.textContent = "Menu";
    subheader.textContent = 'Our delicious food!';


    content.appendChild(header);
    content.appendChild(subheader);

    createCard(content, placeholder, 'McDonie Burger', 'yummy');


    parent.appendChild(content);

}

export function createCard(parent, image, name, desc) {
    const item = document.createElement('div');
    const img = document.createElement('img');
    const itemInfo = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemDesc = document.createElement('p');

    img.src = image;
    itemName.textContent = name;
    itemDesc.textContent = desc;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDesc);
    item.appendChild(img);
    item.appendChild(itemInfo);

    parent.appendChild(item);
}
