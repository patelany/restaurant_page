function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function createSection(name, data) {
    const section = document.createElement('section');
    section.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = name;
    section.appendChild(title);

    data.forEach((d) => {
        const para = document.createElement('p');
        para.classList.add('section-description');
        para.textContent = d;
        section.appendChild(para);
    });

    return section;
}

function loadContact() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
    content.textContent = '';
    setBtnActive('contact us');

    const phoneSection = createSection('Phones', [
        '(1)666-DOES-IT-MATTER',
        '(1)666-WE-DONT-HUG'
    ]);

    const addressSection = createSection('Location', ['666 Westfield, NJ']);

    content.appendChild(phoneSection);
    content.appendChild(addressSection);
}

export default loadContact;