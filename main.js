function darkmode() {
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode') == 'true' 

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
}
function valid(contacts__form){
    let result = true;
    return result
}

document.querySelector('.btn').addEventListener('click', darkmode)

document.getElementById('add-form').addEventListener('submit',function(event){
    event.preventDefault()
    if (valid(this) == true){
        alert('Форма успешно заполнена!')
    }
})