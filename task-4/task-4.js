const showResult = document.querySelector('.result-display');
const inputWidth = document.getElementById('width');
const inputHeigth = document.getElementById('heigth');
const btnRequest = document.querySelector('.btn-style');
let inputMemberWidth = 0;
let inputMemberHeigth = 0;

function useRequest(urldata) {
    return fetch (urldata)
        .then((response) => {
            const showImg = `
                <img src="${response.url}" class="card-image alt="picture">
            `;
            showResult.innerHTML = showImg;
        })
        .catch(() =>{console.log('error')})
}

inputWidth.addEventListener('input', () =>{
    return inputMemberWidth = inputWidth.value;
})

inputHeigth.addEventListener('input', () => {
    return inputMemberHeigth = inputHeigth.value;
} )

btnRequest.addEventListener('click', async ()=> {
    if (inputMemberWidth < 100 || inputMemberWidth > 300 || inputMemberHeigth < 100 || inputMemberHeigth > 300 ) {
        
        const showError = `
            <div>Число вне диапазона от 100 до 300</div>
        `
        showResult.innerHTML = showError;

    } else {
        return useRequest(`https://picsum.photos/${inputMemberWidth}/${inputMemberHeigth}`);
    }
})
