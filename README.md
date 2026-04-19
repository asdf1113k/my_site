# сайт для услуг кондиционирования
Сайт должен быть простым и быстрым

Нужна страница Услуги, в которой три блока горизонтально и в них: название, цена и кнопка «Об услуге»

Давай кнопку заказать посередине, над ней текст, под ней номер телефона

# notes
javascript код генератор дивов
```html
<div id="servicesContainer"></div>

<script src="script.js"></script>
```

```js
// Массив услуг (можно дополнять/править)
const services = [
    "блок с услугой 1",
    "блок с услугой 2",
    "блок с услугой 3"
];

// Находим контейнер, куда будем вставлять блоки
const container = document.getElementById("servicesContainer");

// Функция создаёт один блок
function createServiceBlock(title) {
    const outer = document.createElement("div");
    outer.classList.add("block_with_service");

    const inner = document.createElement("div");
    inner.classList.add("BlockWithTheService");

    const p = document.createElement("p");
    p.textContent = title;

    const button = document.createElement("button");
    button.classList.add("button_about_service");
    button.textContent = "о услуге";

    inner.appendChild(p);
    inner.appendChild(button);
    outer.appendChild(inner);

    return outer;
}

// Добавляем все блоки из массива
services.forEach(serviceTitle => {
    const block = createServiceBlock(serviceTitle);
    container.appendChild(block);
});
```




JavaScript всё равно не «рисует» что‑то отдельно от HTML: он просто меняет DOM‑дерево, а браузер этот DOM автоматически превращает в видимую страницу.

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