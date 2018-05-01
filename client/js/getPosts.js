//1. define functions:
const getPosts = () => {
    const obj = {
        "urlinput": document.querySelector('#urlinput').value,
    

    } 

    console.log('pulling object:', obj);

    fetch('http://localhost:3000/', {
    method:'GET',
    body: Object.parse(obj),
    headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json(obj);
    }).then((obj) => {
        console.log(obj);
    })
}

    document.querySelector('#shortenbutton').onclick = getPost


// const showPosts = (posts) => {
//     console.log(posts)
//     const container = document.getElementById('#urlinput')
//     posts.forEach(post => {
//         let template = `
//               <h2>${post.name}</h2>
//               <input"${post.url}">More</input>
//               <p>${post.text}</p>
//               <div class="comments">
//                     <h3>Comments</h3>
//                     <p>TODO next week...</p>
//               </div>`
//         container.innerHTML += template;
//     })
