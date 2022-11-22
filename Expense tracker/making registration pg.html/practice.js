//CALLBACKS
/*function buycar(callback){
    setTimeout(() => {
        console.log('Buy a car');
        callback();
    }, 5000)
}
function goToTrip(){
    setTimeout(() => {
        console.log('lets go to manali');
    }, 2000)
}

buycar(goToTrip);*/
//call back function first executes buycar and then excutes goToTrip

/*function buycar(callback1, callback2){
    setTimeout(() => {
        console.log('Buy a car');
        callback1(callback2);
    }, 5000)
}
function goToTrip(callback){
    setTimeout(() => {
        console.log('lets go to manali');
        callback();
    }, 2000)
}
function reachAmanali(){
    setTimeout(() => {
        console.log('we reached manali');
    },1000)
}

//buycar(goToTrip(reachAmanali));//lets go to manali
//practice.js:30 we reached manali
//practice.js:18 Buy a car [buy a car is not printed first hence we cannot use it]
buycar(goToTrip, reachAmanali);// it is called callback hell though are ans is right are code gets structured badly
*/



//PROMISES
/*function buycar(callback1, callback2, callback3){
    setTimeout(() => {
        console.log('Buy a car');
        callback1(callback2, callback3);
    }, 5000)
}
function goToTrip(callback1, callback2){
    setTimeout(() => {
        console.log('lets go to manali');
        callback1(callback2);
    }, 2000)
}
function reachAmanali(callback){
    setTimeout(() => {
        console.log('we reached manali');
        callback()
    },1000)
}
function goToKhardungla(){
    setTimeout(() => {
        console.log('we reached khardungla');
    },500)
}
buycar(goToTrip, reachAmanali, goToKhardungla)// we got a right ans but creating callback hell here 
//promises comes to picture*/


/*function buycar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Buy a car');
        }, 5000)
    })
    
}
function goToTrip(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lets go to manali');
        }, 2000)
    })
    
}
function reachAmanali(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('we reached manali');
        },1000)
    })
    
}
function goToKhardungla(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('we reached khardungla');
        },500)
    })
    
}

buycar().then((msg) => {
    console.log(msg)
    goToTrip().then((msg2) => {
        console.log(msg2)
        reachAmanali().then((msg3) =>{
            console.log(msg3)
            goToKhardungla().then((msg4) => {
                console.log(msg4)
            })
        })
    })
})
it is called promise hell as code gets complicated*/



//async await [async await only works with promises]
function buycar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Buy a car');
        }, 5000)
    })
    
}
function goToTrip(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lets go to manali');
        }, 2000)
    })
    
}
function reachAmanali(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('we reached manali');
        },1000)
    })
    
}
function goToKhardungla(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('Accident happende');
        },500)
    })
    
}
async function fun(){
    try{
        const msg = await buycar()
        console.log(msg);
        const msg2 = await goToTrip()
        console.log(msg2);
        const msg3 = await reachAmanali()
        console.log(msg3);
        const msg4 = await goToKhardungla()
        console.log(msg4);

    }catch(err){
        console.log(err)
    }
    
}
fun()
