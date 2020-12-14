var login = async (userN, passW) => {
    if (!userN || !passW) {
        //an error would be encountered with the message of Missing credentials
        throw new Error ('Missing credentials')
    }
    if (passW === "myNameIs") {
        //a promise will be returned with proimseState of Welcome
        return 'Welcome'
    }
}
login.then(() => {
    console.log('Okay')
})
.catch(() => {
    console.log('Not Okay')
})

//type in console login("maybeyourname?", "myNameIs")