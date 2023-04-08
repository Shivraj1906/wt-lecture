function greet(name) {
    alert(`Hello ${name}`)
}

function processInput(callback) {
    const name = prompt('Enter your name')
    callback(name)
}

processInput(greet)