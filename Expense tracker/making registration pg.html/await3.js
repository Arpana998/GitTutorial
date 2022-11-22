//promises are asynchronous
//await only works with promises
async function dadmakesPromise(){
try{
    const dadspromise =await new Promise((resolve, reject) => {
        setTimeout(() => {
            var salaryCredited = true;
            var costOfps5 = 40000;
            var costOfps4 = 30000;
            var salary = 35000;
    
    
            if(salaryCredited === true && salary > costOfps5){
                resolve("buy him ps5");
            }
            else if(salaryCredited === true && salary > costOfps4){
                reject("buy him ps4");
            }
            else{
                reject("sorry son, I will buy it in next month")
            }
        }, 1000)
        
        
    })
    console.log(dadspromise);
}catch(err){
    console.log(err);
}
    
}

dadmakesPromise();
