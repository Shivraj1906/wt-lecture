let flag = true

function createUser(data) {

    // resolve and reject is given by JS
    const promise = new Promise(function (resolve, reject) {
        // logic to handle the createUser
        // validate data etc
        // eg. calls to database
        if(flag) {
            // resolve the promise
            // assuming that user is created
            // return userId
            const id = 'some_id';
            setTimeout(() => resolve(id), 2000)
        } else {
            // reject the promise
            const err = new Error('Invalid data')
            reject(err) // Can be any type of data
        }
    });

    return promise;
}

const promise = createUser({name: "Shivraj"})
console.log(promise)

promise
.then(value => console.log(value))
.catch(err => console.log(err))
