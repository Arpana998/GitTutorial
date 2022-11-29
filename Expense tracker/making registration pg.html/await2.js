const Posts = [
    { title: '1st post', body: 'i am 1st post'},
    { title: '2nd post', body: 'i am 2nd post'}
]
//Convert the createPost , deletePost you wrote previously into async await completely.
function getPost() {
    setTimeout(() => {
        let output = '';
        Posts.forEach((post, index) => {
            output += `<li>${post.title}<li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
getPost();




function createPost() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const newPost = Posts.push({ title: '3rd post' , body: 'i am 3rd post'});
            console.log(newPost);
            resolve(newPost);
         },1000);
    })
    
}
//createPost({ title: '3rd post' , body: 'i am 3rd post'});
//getPost();

function deletePost() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastelement = Posts.pop();
            //console.log(lastelement);
            resolve(lastelement);
        },500);
    })
    
}
//deletePost();
//getPost();

async function WorkOnPost(){
    await createPost();
    await deletePost();
}

WorkOnPost();



 


/*async function workOnPost(){
try{
    const createP = await new Promise((resolve, reject) => {
        setTimeout(() => {
            createPost({ title: '3rd post' , body: 'i am 3rd post'});
            resolve(createPost);
        }, 1000);
    })
    
    const deleteP = await new Promise((resolve, reject) => {
        setTimeout(() => {
            deletePost();
            resolve(deletePost);
        }, 500);
    })
    createP()
      .then(deleteP);
        
    }catch(err){
        console.log(err);
    }
}
workOnPost();
//getPost();
//console.log(Posts)*/
