const createPost = () => {
    const data = {
        "urlinput": document.querySelector('#urlinput').value, 
        "codeinput": document.querySelector('#codeinput').value, 


    }
    console.log('Saving the following object to the server:', data);

    fetch('http://localhost:3000/', {
        method:'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

document.querySelector('#shortenbutton').onclick = createPost


