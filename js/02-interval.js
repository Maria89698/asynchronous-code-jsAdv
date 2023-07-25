// Метод setInteval(callback, delay, args)
console.log('Before');
let num = 0;
setInterval(() => {
    if(num === 6){
        console.log('Ліміт вичерпано');
        return;
    }
    num += 1
    console.log(`${num} разів працює інтервал`);
})