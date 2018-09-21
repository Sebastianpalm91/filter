
const scrollBar = document.querySelector('.scrollbar');
// const scrollIndication = document.querySelector('.scrollIndication');

function getScrollPercent() {
   var h = document.documentElement,
       b = document.body,
       st = 'scrollTop',
       sh = 'scrollHeight';
   return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.addEventListener('scroll', e => {
    getScrollPercent();
    console.log(getScrollPercent());
})
