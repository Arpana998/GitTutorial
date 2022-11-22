function sowSeed(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('sow flowers seed');
        },1000)
    })
}
function GrownUp(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('it has been grown up');
        },5000)
    })
}
function Blossom(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('it has blossom with flowers')
        },2000)
    })
}
async function flower(){
    try{
        const first = await sowSeed()
        console.log(first)
        const second = await GrownUp()
        console.log(second)
        const third = await Blossom()
        console.log(third)
    }catch(error){
        console.log(error);
    }
}
flower()