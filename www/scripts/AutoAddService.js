// сделать скрипт который сам добавит три блока с услугами а не это мозго ёбство с html
console.log('script work');

// Массив услуг (можно дополнять/править)
const services_title = [
    "блок с услугой 1",
    "блок с услугой 2",
    "блок с услугой 3"
];

// Находим контейнер, куда будем вставлять блоки
const container = document.getElementById("servicesContainer");

// Функция создаёт один блок
function createServiceCard(title_card_service, text_in_buttom, description_service) {
    const card_service = document.createElement("div");
    card_service.classList.add("card_with_the_service");

    const text_center = document.createElement('div');
    text_center.classList.add('text_center_in_display-flex')

    const h2 = document.createElement("h2");
    h2.classList.add('title_service');
    h2.textContent = title_card_service;

    const button = document.createElement("button");
    button.classList.add("button_about_service");
    button.textContent = text_in_buttom;

    const description_service_p = document.createElement('p');
    description_service_p.textContent = description_service;

    text_center.appendChild(h2)
    card_service.appendChild(text_center);
    card_service.appendChild(button);
    card_service.appendChild(description_service_p);
    return card_service;
}

// Добавляем все блоки из массива   
services_title.forEach(serviceTitle => {
    const block = createServiceCard(serviceTitle, "о услге", 'обисание услуги');
    container.appendChild(block);
});
