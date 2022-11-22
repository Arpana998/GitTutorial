console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {//async function always return promise

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
});
const bringPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

const bringButter = new Promise((resolve, reject) => resolve(`butter`));

const bringColdDrink = new Promise((resolve, reject) => resolve(`colddrink`));

let ticket = await promiseWifeBringingTicket;

/*let ticket = await promiseWifeBringingTicket;
console.log(`wife now I have a ${ticket}`);
console.log('husband we should go in');
console.log('wife: no I am hungry');

let popcorn = await bringPopcorn;
console.log(`Husband I got some ${popcorn}`);
console.log('husband: we should go in');
console.log('Wife: i need butter on my popcorn');

let butter = await bringButter;
console.log(`Husband: I got some ${butter}`);

let colddrink = await bringColdDrink;
console.log(`wife: i want ${colddrink}`);
console.log('Husband: I got MountandDue');
console.log('Wife: lets go now');*/

let[popcorn, butter, colddrink] = await Promise.all([bringPopcorn, bringButter, bringColdDrink])
console.log(`${popcorn}, ${butter}, ${colddrink}`);

return ticket;

}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person3: shows ticket');
console.log('person4: shows ticket');