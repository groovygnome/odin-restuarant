import mcdonie from './imgs/mcdonie.jpg'
import mcdaddy from './imgs/mcdaddy.png'
import nachos from './imgs/daisy-nachos.png'
import popcorn from './imgs/popcorn.png'
import sohot from './imgs/sohot.png'



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

    createCard(content, mcdonie, 'McDonie Burger', `Nancy's Favorite! This handcrafted delicacy features a rich, aged artisanal bun, naturally ripened with deep-sea minerals for a bold taste. Nestled within is ocean greens, coral sprouts, and exotic fungal pearls. Certain to be delicious for every Merries tastes.`, 'food');
    createCard(content, mcdaddy, 'McDaddy Deluxe', 'A bold twist on a classic dish! Microwaved hot dogs smothered in frozen chili, drizzled with mustard, and topped with raw onions, served on old stale white bread. <3 Comes with glass of iced skim milk. Original recipe by father McDonie.', 'food');
    createCard(content, nachos, 'Daisys Nachos', 'Our signature frozen never fresh nachos, this dish is perfectly microwaved to be cold on the outside, and scaldingly hot on the inside.', 'food');
    createCard(content, popcorn, 'Popcorn', 'yummy', 'food');




    parent.appendChild(content);

}

export function createCard(parent, image, name, desc, classNm) {
    const item = document.createElement('div');
    item.className = classNm;
    const img = document.createElement('img');
    const itemInfo = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemDesc = document.createElement('p');
    const soHotcontainer = document.createElement('div');
    const soHot = document.createElement('p');
    soHot.textContent = '+ Make it ';
    const soHotImg = document.createElement('img');
    soHotImg.className = 'so-hot-img'
    soHotcontainer.appendChild(soHot);
    soHotcontainer.appendChild(soHotImg);
    soHotcontainer.className = 'so-hot';
    soHotImg.src = sohot;
    const lettuce = document.createElement('p');
    lettuce.textContent = '+ Wrap Me in Lettuce';


    img.src = image;
    itemName.textContent = name;
    itemDesc.textContent = desc;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDesc);
    if (classNm == 'food') {
        itemInfo.appendChild(soHotcontainer);
        itemInfo.appendChild(lettuce);
    }
    item.appendChild(img);
    item.appendChild(itemInfo);

    parent.appendChild(item);
}
