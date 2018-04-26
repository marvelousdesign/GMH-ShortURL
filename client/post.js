const createPost = () => {
    const data = {
        "  url-input": document.querySelector('#url-input').value,
        

    }
    console.log('Saving the following object to the servera:', data);

    fetch('http://localhost:3000/',{
        method:'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })
}

document.querySelector('#shorten-button').onclick = createPost


// const input = document.getElementById('url-input'),
//     button = document.getElementById('shorten-button'),
//     out = document.getElementById('url-output');

// input.focus();

// async function shorten (href) {
//     const shortid = (await (await fetch('/api/new', {
//         method: 'post',
//         headers: {"Content-Type": "application/json",
//         },
//         body: JSON.stringify({href}),
//     })).json()).shortid;

//     return shortid;
// }

// button.addEventListener('click', async () => {
//     const link = `${location.origin}/l/${await shorten(input.value)}`;
//     out.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
// });
