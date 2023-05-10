let count = 6;
const COUNTDOWN = document.querySelector('.count-down');
const COUNTSIGN = document.querySelector('.count-sign')

let countdown = setInterval(() => {
    if(count > 0) {
        count--;
        COUNTDOWN.textContent = count;
    }else if(count == 0) {
        COUNTSIGN.textContent= '';
        alert("사은품 끝");
        clearInterval(countdown);
    }
    console.log(COUNTDOWN);
}, 1000);