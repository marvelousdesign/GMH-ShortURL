//1. define functions:
const getPosts = () => {
    const obj = {
        'urlinput': document.querySelector('#urlinput').value,
        'shortcode': document.querySelector('#shortcode').value
    }

    console.log('pulling object:', obj)

    // url will change depending on what url you are on
    fetch(url, {
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
