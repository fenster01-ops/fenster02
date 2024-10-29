const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')

})
modal.addEventListener('click', () => {
    const target = event.target
    if(target && target.classList.contains('modal'))  {
        modal.classList.remove('modal--open')
    }
})