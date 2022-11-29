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

function createPost(post) {
    return new Promise((resolve, reject) => {//if we get any kind of error we call reject
        setTimeout(() => {
            posts.push(post);
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

createPost({ title: 'Post three',body: 'I am post three', createdAt: new Date().getTime()})
.then(getPost)
.catch(err => console.log(err));

/*I want you to create one more promise called updateLastUserActivityTime. Every time the user
 creates a post, this promise should be parallely called (should execute in 1 second) .When 
 both the promises (createPost and updateLastUserActivityTime resolve), I want you to console 
 log all the posts created and lastActivityTime of the user*/


/*const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
setTimeout(resolve, 2000, 'Goodbye'));
//const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());//using 
//res.json we do formatting of content

Promise.all([promise1, promise2, promise3])
.then(values => console.log(values)
);*/

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

const user = {
    username: 'Rohit',
    lastactivitytime: '22nd of oct'
}
function updatelastactivitytime(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            var previoustime = `${user.lastactivitytime}`
            console.log(previoustime)
            user.lastactivitytime = new Date().getTime();
            console.log(`${user.lastactivitytime}`);
            resolve(user.lastactivitytime)
        },1000)
    })
    .catch(err => console.log(err));
}
function userupdatespost(){
    Promise.all([createPost(), updatelastactivitytime()])
    .then((createPost, updatelastactivitytime) => {
        console.log(createPost, updatelastactivitytime)
    }).then(() => {
        deletePost();
    })
    
    .catch(err => console.log(err))

}
createPost({ title: 'Post Four',body: 'I am post four', createdAt: new Date().getTime()})
.then(() => {
    getPost();
    userupdatespost()
})
.catch(err => console.log(err));