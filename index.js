fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((response) =>{
        let users = response
        divUsers = document.createElement('div')
        divUsers.className = 'dispWrap'
        for (const user of users) {
            let divUser = document.createElement('div')
            divUser.className = 'user'
            let imgUser = document.createElement('img')
            imgUser.className = 'imgUser'
            imgUser.src = 'avatar4.jfif'
            divUser.appendChild(imgUser)
            divUser.innerHTML += `<br>Ім'я користувача: ${user.name}<br>ID користувача: ${user.id}<br>`
            let aUsers = document.createElement('a')
            aUsers.href = `user-details.html?id=${user.id}`
            aUsers.innerHTML = ` Деталі користувача`
            divUser.appendChild(aUsers)
            divUsers.appendChild(divUser)
        }
        document.body.appendChild(divUsers)
        console.log(users)
    })