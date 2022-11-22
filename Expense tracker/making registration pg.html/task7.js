console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promisewifeBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    },2000)
});
const getPopcorn = promisewifeBringsTicket.then((t) =>{
    console.log('wife:i have the tickets');
    console.log('husband: we should go');
    console.log('wife: no, I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) =>{
    console.log('Husband: I got some popcorn');
    console.log('Husband: we should go');
    console.log('wife: i need a butter on my popcorns');
    console.log('Husband: i brought it');
    return new Promise((resolve, reject) => resolve(`${t} Butter`));
});

const getColdDrink = getButter.then((t) => {
    console.log('wife: i want colddrink');
    console.log('Husband: I got MountandDue');
    console.log('Wife: lets go now')
    return new Promise((resolve, reject) => resolve(`${t} ColdDrink`));
})
getColdDrink.then((t) => console.log(t))

//getButter.then((t) => console.log(t));

//getPopcorn.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket')

