let count = 6;
const COUNTDOWN = document.querySelector('.count-down');
const COUNT_ELEMENT= document.querySelector('.count-element')

let countdown = setInterval(() => {
    if(count > 0) {
        count--;
        COUNTDOWN.textContent = count;
    }else if(count == 0) {
        COUNT_ELEMENT.textContent= '';
        alert("사은품 끝");
        clearInterval(countdown);
    }
    console.log(COUNTDOWN);
}, 1000);
