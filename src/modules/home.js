function createIntroSection() {
    const intro = document.createElement('section');
    intro.classList.add('section');

    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = "Addams' diner's dark and gloomy vibe paired perfectly with Pugsley's high pitched screams. Their food was disgusting and served by the creepiest, kookiest and spookiest staff. I coudn't imagine a better way to end my night. - Person kidnapped by Wednesday Addams";

    intro.appendChild(para);
    return intro;
}

function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');

    content.textContent = '';

    const introSection = createIntroSection();

    setBtnActive('home');

    content.appendChild(introSection);
}

export default loadHome;
