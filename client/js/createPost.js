const localhost = 'http://localhost:3000/'
const herokuapp = 'https://gmshortener.herokuapp.com/'

const createPost = () => {
    const data = {
        'urlinput': document.querySelector('#urlinput').value,
        'shortcode': document.querySelector('#shortcode').value
    }

    // to test locally replace herokuapp with localhost
    fetch(herokuapp, {
        method:'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log('Message:', data.message)
        console.log('Shortcode:', data.shortcode)
        document.getElementById('output').innerHTML = data.message
    })
}

document.querySelector('#shortenbutton').onclick = createPost
