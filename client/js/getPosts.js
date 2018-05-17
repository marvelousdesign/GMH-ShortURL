//1. define functions:
const getPosts = () => {
    const obj = {
        'urlinput': document.querySelector('#urlinput').value,
        'shortcode': document.querySelector('#shortcode').value
    }

    console.log('pulling object:', obj)

    // to test locally replace herokuapp with localhost
    fetch(herokuapp, {
    method:'GET',
    body: Object.parse(obj),
    headers: {"Content-Type": "application/json"}

    }).then((response) => {
        return response.json(obj)
    }).then((obj) => {
        console.log(obj)
    })
}

document.querySelector('#shortenbutton').onclick = getPosts
