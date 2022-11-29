const Posts = [
    { titile: '1st post', body: 'i am a first post'},
    { titile: '2nd post', body: 'i am a second post'}
]

function getPost() {
    
    setTimeout(() =>{
        let output = '';
        Posts.forEach((post, index) => {
            output += `<li>${post.titile}<li>`;
        });
        document.body.innerHTML = output;
    },1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {//if we get any kind of error we call reject
        setTimeout(() => {
            Posts.push(post);
            const error = false;
            if(!error)
            {
                resolve();
            }else{
                reject('Error: somethhing went wrong');
            }
        },2000);
    })
}

function create4thPost(post) {
    return new Promise((resolve, reject) => {//if we get any kind of error we call reject
        setTimeout(() => {
            Posts.push(post);
            const error = false;//when error is true above function will not be printed and 
            //uncaught error will be shown in inspect to get something different at uncaught we use .catch()
            if(!error)
            {
                resolve();
            }else{
                reject('Error: somethhing went wrong');
            }
        },2000);
    })
}
getPost();
createPost({ titile: '3rd post', body: 'i am third post'})
  .then(getPost);
  create4thPost({ titile: '4th post', body: 'i am fourth post'})
  .then(getPost)
  .catch(err => console.log(err));


  function deletePost(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(Posts.length > 0){
                const lastelement = Posts.pop();
                resolve(lastelement);
            }else{
                reject('Array is empty now');
            }
        },1000);
 
    });
   
}



createPost({ titile: 'Post Five', body: 'this is post five'})
.then(() => {
    getPost();
    deletePost().then(() => {
        getPost();
        deletePost().then(() => {
            getPost()
            deletePost().then(() => {
                getPost()
                deletePost().then(() => {
                    getPost()
                    deletePost().then(() => {
                        getPost()
                        deletePost().then(() => {})
                        .catch((err)=>{
                         console.log('Inside catch block', err)
                        })
                    })

                })
                

            })
        })
    })
})
.catch(err => console.log(err));

//.then takes functions reference and not a function
createPost({ titile: '6th Post', body: 'this is a 6th Post'})
.then(() => {
    getPost();
    deletePost().then(() => {
        getPost()
    })
})





