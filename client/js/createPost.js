const getBaseURL = () => {
    if (window.location.href.indexOf('gmshortener.herokuapp.com') !== -1) {
        return 'https://gmshortener.herokuapp.com/'
    }
    return 'http://localhost:3000'
}
const url = getBaseURL()

const createPost = () => {
    const data = {
        'urlinput': document.querySelector('#urlinput').value,
        'shortcode': document.querySelector('#shortcode').value
    }

    // url will change depending on what url you are on
    fetch(url, {
        method:'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log('Message:', data.message2)
        console.log('Shortcode:', data.shortcode)
        document.getElementById('output').innerHTML = data.message
    })
}

document.querySelector('#shortenbutton').onclick = createPost
