// fetching my Github profile from Github API
const HTTP_URL = 'https://api.github.com/users/Shivraj1906'

// use fetch
const promise = fetch(HTTP_URL)

// Content of promise object
console.log(promise)

// then is used to run callback when promise is resolved
promise
.then(function(value) {
    console.log(value)

    // we need to convert the readableSteam to JSON data
    // Notice how json() also returns the Promise
    return value.json()
})
.then(function(parsed) {
    console.log(parsed);
})
.catch(function(error) {
    console.log(error)
})

// Notice how this code was executed before the code above
// Because Promises are "non-blocking" by nature
console.log('Normal code')