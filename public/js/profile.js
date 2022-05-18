window.addEventListener('DOMContentLoaded', ()  => {
    const inputAvatar = document.querySelector('#input-avatar')
    const formContainer = document.querySelector("#form-container")

    formContainer.addEventListener("click", (e) => {
        inputAvatar.click(e)
    })

    inputAvatar.addEventListener('change', () => {
        formContainer.submit()
    })
})
