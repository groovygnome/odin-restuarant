import logo from './imgs/logo.png'

export function home() {
    const parent = document.querySelector('#content');
    const old = document.querySelector('.container');
    if (old) parent.removeChild(old);
    const content = document.createElement('div');
    content.className = 'container';

    const header = document.createElement('h1');
    const img = document.createElement('img');
    const abtSection = document.createElement('div');
    const header2 = document.createElement('h2');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const quote = document.createElement('div');
    const quoteText = document.createElement('p');
    const quoteName = document.createElement('span');
    const address = document.createElement('div');
    const location = document.createElement('h2');
    const locationText = document.createElement('p');
    const locationLink = document.createElement('a');

    header.textContent = "Welcome to Nancy's Burgeria";
    img.src = logo;
    header2.textContent = "About Nancy's Burgeria";
    para1.textContent = `Welcome to Nancy’s Burgeria, where every bite is a BAAM of flavor! Founded by Nancy Jewel McDonie, former member of MOMOLAND, this isn’t just any burger joint—it’s a place where great food meets great vibes, and every meal feels like a Thumbs Up moment.`;
    para2.textContent = `Nancy’s passion for delicious, high-quality food inspired her to create a menu that’s just as fun, bold, and exciting as her music career. Whether you’re craving a JJan! Koong! Kwang!-sized burger, BBoom BBoom-level crispy fries, or a refreshing milkshake that will make you Freeze!, we’ve got something for everyone.`;
    para3.textContent = `At Nancy’s Burgeria, we believe in spreading FUN TO THE WORLD with a GREAT! burger experience—one that brings people together, just like MOMOLAND did for fans around the world. So come hungry, bring your Merry's, and get ready for a burger adventure that will have you dancing all the way home! Just listen to what our #1 customer Robert has to say!`;

    quote.className = 'quote';
    quoteText.textContent = `Nancy makes the best burgers! Her burgers will make you wonder "What planet is she from?" My favorite order is the McDaddy Deluxe with a side of Daisy's Nachos! If you don't like Nancy's Burgeria then raise your standards.`;
    quoteName.textContent = ` - Robert Leone`;

    location.textContent = `Location`
    locationText.textContent = `Our mission to spread Fun To The World starts in the birthstate of our queen Nancy Jewel McDonie, Ohio! We're working on getting an official address, so in the mean time, you'll need to use the exact GPS coordinates of our restaurant! See you there!`;

    locationLink.textContent = `40°16'27.2"N 81°35'47.0"W`
    locationLink.setAttribute('href', `https://www.google.com/maps/place/40%C2%B016'27.2%22N+81%C2%B035'47.0%22W/@40.2740237,-81.5962605,17z/data=!4m4!3m3!8m2!3d40.2742222!4d-81.5963889?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D`);
    locationLink.setAttribute('target', '_blank');

    content.appendChild(header);
    content.appendChild(img);
    abtSection.appendChild(header2);
    abtSection.appendChild(para1);
    abtSection.appendChild(para2);
    abtSection.appendChild(para3);
    content.appendChild(abtSection);
    quote.appendChild(quoteText);
    quote.appendChild(quoteName);
    content.appendChild(quote);
    address.appendChild(location);
    address.appendChild(locationText);
    address.appendChild(locationLink);
    content.appendChild(address);

    parent.appendChild(content);

}
