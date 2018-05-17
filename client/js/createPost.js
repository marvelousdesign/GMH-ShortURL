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
        if (data.shortcode === undefined) {
            console.log('Message:', data.message)
            document.getElementById('output').innerHTML = data.message
        } else {
            console.log('Message:', data.message, data.baseUrl + data.shortcode)
            document.getElementById('output').innerHTML =
                `${data.message} <a href="${data.baseUrl}${data.shortcode}" target="_blank">${data.baseUrl}${data.shortcode}</a>`
        }
        console.log('Shortcode:', data.shortcode)
    })
}

document.querySelector('#shortenbutton').onclick = createPost
