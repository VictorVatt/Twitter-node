function bindTweet() {

    const elements = document.querySelectorAll('.btn-danger')
    const tweetsContainer = document.querySelector("#tweet-list-container")
    elements.forEach(e => {
        e.addEventListener('click', (event) => {
            const tweetId = event.target.getAttribute("tweetid")
            axios.delete('/tweets/' + tweetId)
                 .then((res) => {
                    tweetsContainer.innerHTML = res.data
                    bindTweet()
                 })
                 .catch(err => console.log(err))
        })
    })
}

window.addEventListener('DOMContentLoaded', ()  => {
    bindTweet()
})
