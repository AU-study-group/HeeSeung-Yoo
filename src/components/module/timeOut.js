let count = 6;
const COUNTDOWN = document.querySelector('.count-down');

setInterval(() => {
    if(count > 0) {
        count--;
    }

    console.log(count);
    COUNTDOWN.textContent = count;
}, 1000);


