
const showResult = document.querySelector('.result-display');
const inputNumber = document.getElementById('number');
const inputLimit = document.getElementById('limit');
const btnRequest = document.querySelector('.btn-style');
let inputMemberNumber = 0;
let inputMemberLimit = 0;

window.onload = () => {
    if (localStorage.length != 0) {
        inputNumber.value = localStorage.inputNumber;
        inputLimit.value = localStorage.inputLimit;
        return useRequest(`https://picsum.photos/v2/list?page=${inputNumber.value}&limit=${inputLimit.value}`);
    }
}

function useRequest(urldata) {
    fetch (urldata)
        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((apiData) => {
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
            showResult.innerHTML = showCards;

        })
        .catch(() => {console.log('error')});
}

inputNumber.addEventListener('input', () => {
    if (inputNumber.value < 1 || inputNumber.value > 10) {
        return inputMemberNumber = 0;

    } else {
        localStorage.inputNumber = inputNumber.value;
        return inputMemberNumber = inputNumber.value;
    }
});

inputLimit.addEventListener('input', () => {
    if (inputLimit.value < 1 || inputLimit.value > 10) {
        return inputMemberLimit = 0;

    } else {
        localStorage.inputLimit = inputLimit.value;
        return inputMemberLimit = inputLimit.value;
    }
});

btnRequest.addEventListener('click', ()=> {

    if (inputMemberNumber == 0 && inputMemberLimit == 0) {
        const showError = `
            <div>Номер страницы и лимит вне диапазона от 1 до 10</div>
        `
        showResult.innerHTML = showError;
    
    } else if (inputMemberLimit == 0) {
        const showError = `
            <div>Лимит вне диапазона от 1 до 10</div>
        `
        showResult.innerHTML = showError;
    
    } else if (inputMemberNumber == 0) {
        const showError = `
            <div>Номер страницы вне диапазона от 1 до 10</div>
        `
        showResult.innerHTML = showError;
    
    } else {
        const requestresult = useRequest(`https://picsum.photos/v2/list?page=${inputMemberNumber}&limit=${inputMemberLimit}`);
        return requestresult;
    }
})
