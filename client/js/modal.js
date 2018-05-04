const initModal = () => {
    document.querySelectorAll('#urlinput').forEach(elem => {
        elem.onclick = () => {
            document.querySelector('#shortenbutton')
        }
    })
}

initModal()