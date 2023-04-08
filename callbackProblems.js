// Psudo code to create new user in the system
// steps:
// 1. take the data from the user
// 2. check if user exist with same data or not
// 3. if not hash the password of the user
// 4. add the user to database
// 5. Return the token if all things are successful

checkIfUserExist(userData, function success(userData) {
    hashPassword(userData.password, salt, function hashComplete(value) {
        addUserToDatabase(userData, value, function dataInserted(rowId) {
            generateToken(userData.email, function onComplete(token) {
                sendResponseToUser(token, 200, function onComplete(status) {
                    // Tasks to be done after the data is sent
                })
            }, function onError(message) {
                let error = new Error(message)
                return error;
            })
        }, function databaseError(message) {
            let error = new Error(message)
            return error;
        })
    })
}, function userDuplicate() {
    let error = new Error("User already exists")
    return error;
})