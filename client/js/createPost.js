const createPost = () => {
    const data = {
        'urlinput': document.querySelector('#urlinput').value,
        'shortcode': document.querySelector('#shortcode').value
    }

    if ((data.shortcode.length >= 6) || (data.shortcode.length === 0)) {
        console.log('Saving the following object to the server:', data)
    } else {
        console.log(`Your url: ${data.urlinput} is not saved, please try again!`)
    }

    fetch('http://localhost:3000/', {
        method:'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.getElementById('output').innerHTML = `Your short${data.message}`
    })
}

document.querySelector('#shortenbutton').onclick = createPost
