console.log('a');
console.log('b');
//setTimeout(() => { console.log('c') },1000);
//setTimeout(() => { console.log('d') },500);
//console.log('e');

async function printC(){
    const message1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('c')
        },1000)
    })
    console.log(message1);
    
    const message2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('d');
        },500)

    })
    console.log(message2);
    console.log('e');

}
printC();

