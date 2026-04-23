# сайт для услуг кондиционирования
Сайт должен быть простым и быстрым

Нужна страница Услуги, в которой три блока горизонтально и в них: название, цена и кнопка «Об услуге»

Давай кнопку заказать посередине, над ней текст, под ней номер телефона

# notes





---
## javascript код генератор дивов
```html
<div id="servicesContainer"></div>

<script src="script.js"></script>
```

```js
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
    // card_service.classList.add("block_text-shadow");

    const text_center = document.createElement('div');
    text_center.classList.add('text_center')

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
    const block = createServiceCard(
        serviceTitle, 
        "о услге",
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia a impedit. Facilis, officiis voluptatibus! Sequi quod cupiditate placeat alias enim nostrum, eum, odio soluta recusandae, asperiores beatae aperiam rem.'
    );
    container.appendChild(block);
});
```

Как элементы попадают на HTML‑страницу
Создание HTML‑элемента в JavaScript

```js
const div = document.createElement("div");
div.textContent = "Текст";
div.classList.add("my-block");
```
На этом этапе элемент есть в памяти, но ещё не на странице.

Вставка элемента в DOM (то есть в HTML‑структуру)

```js
const container = document.querySelector("#servicesContainer");
container.appendChild(div); // или container.append(div);
```
Это команда говорит:

найди элемент в DOM‑дереве (#container),

и добавь в него наш div в конце.
После этого браузер перерисовывает страницу, и новый блок становится видимым.

Можно вставлять не только один элемент, а много Ты можешь в цикле создавать десятки/сотни блоков и добавлять их в appendChild / append, и они все появятся на HTML‑странице.

Коротко
Через JavaScript элементы попадают на HTML‑страницу, когда ты:

создаёшь их через document.createElement(...),

и затем вставляешь в уже существующий HTML‑элемент с помощью appendChild, append, insertAdjacentHTML или аналогов.