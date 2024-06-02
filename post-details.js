let id = new URLSearchParams(window.location.search).get('id')
async function foo() {
    let first = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then((response) => {
            let post = response
            divPost = document.createElement('div')
            divPost.className = 'divPost'
            divPost.innerHTML = `<h1>${post.title}</h1><br> ${post.body}<br>
        <br>ID користувача: ${post.userId}<br>ID поста: ${post.id}`
            document.body.appendChild(divPost)
            console.log(post)
        })
    let second = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then((response) => {
            let comments = response
            let divComments = document.createElement('div')
            divComments.className = 'divComments'
            let pComments = document.createElement('p')
            pComments.textContent = `Comments:`
            document.body.appendChild(pComments)
            for (const comment of comments) {
                let divComment = document.createElement('div')
                divComment.className = 'divComment'
                divComment.innerHTML = `<span>${comment.name}</span><br><br>${comment.body}<br><hr>${comment.email}`
                divComments.appendChild(divComment)
            }
            document.body.appendChild(divComments)
            console.log(comments)
        })
}
foo()