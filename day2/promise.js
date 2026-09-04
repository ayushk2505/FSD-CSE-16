const myPromise = new Promise((resolve, reject) => {

    let age = 17
    if (age > 18) {
        resolve("can vote")
    }
    else reject("can't vote ")

})
const checkEligibility = async () => {
    try {
        const msg = await myPromise;
        console.log(msg);
    } catch (error) {
        console.log(error);
    }
};

checkEligibility();

// myPromise
//     .then((msg) => console.log(msg))
//     .catch((error) => console.log(error)
//     )