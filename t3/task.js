const bookControl = document.querySelectorAll('.font-size')
const bookContent = document.querySelector('.book__content')
Array.from(bookControl).forEach( elem => {
    elem.addEventListener('click', (event) => {event.preventDefault()});
    elem.addEventListener('click', () => {
            if (elem.classList.contains("font-size_active") == false) {
                document.querySelector('.font-size_active').classList.remove('font-size_active')
                elem.classList.add('font-size_active')
                bookContent.classList.remove('book_fs-big', 'book_fs-small')
                bookContent.classList.add(`book_fs-${elem.dataset.size}`)
            }
            
    })
})