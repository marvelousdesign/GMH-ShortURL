//1. define functions:
const getPosts = () => {
    const obj = {
        "urlinput": document.querySelector('#urlinput').value,
        "codeinput": document.querySelector('#codeinput').value, 

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

    document.querySelector('#shortenbutton').onclick = getPosts

