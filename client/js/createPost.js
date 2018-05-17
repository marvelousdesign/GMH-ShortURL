const getFetchURL = () => {
    return (window.location.href.indexOf('gmshortener.herokuapp.com') !== -1) ?
        'https://gmshortener.herokuapp.com/' : 'http://localhost:3000/'
}
const url = getFetchURL()

const createPost = () => {
    const data = {
        'urlinput': document.querySelector('#urlinput').value,
        'shortcode': document.querySelector('#shortcode').value
    }

    // url for fetch will change depending on what url you are on
    fetch(url, {
        method:'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json()
    }).then((data) => {
        // url2 output what process.env.VARIABLE is between BASE_URI & LOCALHOST in server/routes/db.js
        const getServerUrl = (data) => {
            return (data.baseUrl === 'https://gmshortener.herokuapp.com/') ?
                'https://gmshortener.herokuapp.com/' : 'http://localhost:3000/'
        }
        const url = getServerUrl(data)

        if (data.shortcode === undefined) {
            console.log('Message:', data.message)
            document.getElementById('output').innerHTML = data.message
        } else {
            console.log('Message:', data.message, url2 + data.shortcode)
            document.getElementById('output').innerHTML =
                `${data.message} <a href="${url2}${data.shortcode}" target="_blank">${url2}${data.shortcode}</a>`
        }
        console.log('Shortcode:', data.shortcode)
    })
}

document.querySelector('#shortenbutton').onclick = createPost
