// сделать скрипт который сам добавит три блока с услугами а не это мозго ёбство с html

const body = document.getElementById("body");


function add_count_block_div() {
    const main_div = document.createElement('div');
    main_div.classList.add('test_div');
    main_div.textContent('test script')

    const text_in_div = document.createElement('p')
    text_in_div.textContent('test script')

    main_div.appendChild(text_in_div)

    body.appendChild(main_div)

    return None;
};
add_div_with_service();