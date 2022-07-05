const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json', true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(1);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });  
});

inputUsd.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json', true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputRub.value = (+inputUsd.value * data.current.usd).toFixed(1);
        } else {
            inputRub.value = 'Что-то пошло не так';
        }
    });  
});