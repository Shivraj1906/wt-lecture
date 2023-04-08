function delay() {
    let i = 0;
    while(i < 1000000) i++;
}

// Sync 
[1, 2, 3, 4].forEach(function (i) {
    console.log('Processing sync');
    delay();
})

// Async
function asyncForEach(array, callback) {
    array.forEach(function () {
        setTimeout(callback, 0);
    })
}

asyncForEach([1, 2, 3, 4], function (i) {
    console.log('Processing async');
    delay();
})