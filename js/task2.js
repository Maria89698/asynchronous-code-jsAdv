function printNumbers(from, to) {
    let num = from
    let fh = setInterval(function() {
        if (num === to) {
            clearInterval(fh)
        } else {
            num ++
            console.log(num);
        }
    }, 1000)
};