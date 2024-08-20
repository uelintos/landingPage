AOS.init();

const bDay = new Date("Aug 28 2024, 12:00");
const timeStamp = bDay.getTime()

const counter = setInterval(function(){
    const now = new Date()
    const nowTS = now.getTime()
    
    const distance = timeStamp - nowTS;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor(distance / hours / (1000 * 60 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(distance < 0){
        document.querySelector('.hero__text').innerHTML = (`O Evento Terminou`)
        document.querySelector('.hero__text-days').innerHTML = (``);
    }
    else{
        document.querySelector('.hero__text-days').innerHTML = (`${days}D ${hours}H ${mins}M ${sec}S`)
    }
}, 1000);

