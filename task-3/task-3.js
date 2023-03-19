/* Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:
    Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
    Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
После получения данных вывести ниже картинки на экран. */

const resultNode = document.querySelector('.js-show-result');
const btnNode = document.querySelector('.js-btn-request');
const inputNumber = document.getElementById('number');

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответ: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
    
}


function displayResult (apiData) {
    let showCards = '';

    apiData.forEach(item => {
        const showCardsBlock = `
            <div class="flex-block">
                <div class="card">
                    <img src="${item.download_url}" class="card-image">
                    <p>${item.author}</p>
                </div>
            </div>
        `;
        showCards = showCards + showCardsBlock;
    });

    resultNode.innerHTML = showCards;
};


let inputMember = 0;

inputNumber.addEventListener('input', () =>{
    return inputMember = document.getElementById('number').value;
});


btnNode.addEventListener('click', () => {
    if (inputMember > 10 || inputMember < 1) {
        const showInput = `
        <div>Число вне диапазона от 1 до 10</div>
    `
        resultNode.innerHTML = showInput;

    } else {
        useRequest(`https://picsum.photos/v2/list?limit=${inputMember}`, displayResult);
    }
});
