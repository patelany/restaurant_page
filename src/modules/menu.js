function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function createFood(src, text, price, alt) {
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const description = document.createElement('div');
    description.classList.add('description');

    const foodName = document.createElement('h3');
    foodName.textContent = text;

    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;

    description.appendChild(foodName);
    description.appendChild(foodPrice);

    food.appendChild(img);
    food.appendChild(description);
    return food;
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');

    content.textContent = '';
    setBtnActive('menu');

    const foods = [
        createFood(
            'https://t4.ftcdn.net/jpg/05/48/66/13/240_F_548661356_MV5Cp8cNnXAdy7q3Pu5HXx0kczIDPkTi.jpg',
            'Poison Apples',
            '$2.00 & a tooth',
            'Poison Apples'
        ),
        createFood(
            'https://t4.ftcdn.net/jpg/03/39/75/89/240_F_339758916_w672dQIkpVG1spsuiG6iNNdLAtPPfdjR.jpg',
            "Pugsley's Tears",
            '$0.50',
            "Pugsley's Tears"
        ),
        createFood(
            'https://t4.ftcdn.net/jpg/02/92/17/93/240_F_292179360_AR8rxdlAh1QxhmfTGJeKFcgZDnYC7FS7.jpg',
            'Corpse Reviver',
            '$10.00 & a drop of your blood',
            'Corpse Reviver'
        ),
        createFood(
            'https://t4.ftcdn.net/jpg/02/26/34/17/240_F_226341714_qfsoLkkpKEI1lhfFmfG1cpIgiIdQYR0F.jpg',
            'Death Shots',
            '$5.00',
            'Death Shots'  
        ),
        createFood(
            'https://t3.ftcdn.net/jpg/00/25/93/02/240_F_25930271_viFjFwuU4jBX80klp9HiXqhQe6hWLIi6.jpg',
            'Dyed Bat Droppings',
            '$1.00',
            'Dyed Bat Droppings'
        )
    ];

    foods.forEach((food) => {
        content.appendChild(food);
    });
}

export default loadMenu;
