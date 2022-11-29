const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
]
let intervalId = 0;
function getPost() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
       for(let i = 0; i < posts.length; i++) {
           output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`;
       }
       console.log(output);
    document.body.innerHTML = output;

    }, 1000);
      
    //}, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },2000);
}
//Make a new function call create4thPost for adding one more new post "Post Four". create4thPost 
//should take createPost as a callback function. Once the post is created all the 4 posts should be
// displayed too.
function Create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();

    },4000);
}


getPost()
createPost({ title: 'Post Three', body: 'This is post three'}, getPost);
createPost({ title: 'Post Four', body: 'This is post Four'}, getPost);
Create4thPost({ title: 'Post Five', body: 'This is post Four'}, getPost);


var timer;
var count = 0
function lastEditedInSecondsAgo(){
    count = 0;
    clearInterval(timer)
    timer = setInterval(() => {
        count++;
        console.log(count);
    },5000);

    lastEditedInSecondsAgo();

}
//2)Create a new function called delete post which uses promises and deletes in 1 second
// (processing time - mimic it with setimeout). Everytime you call it, it should delete the last 
//element of the array

function deletePost(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0){
                const lastelement = posts.pop();
                resolve(lastelement);
            }else{
                reject('Array is empty now');
            }
        },1000);
 
    });
   
}
deletePost(posts, getPost);
