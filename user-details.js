let id = new URLSearchParams(window.location.search).get('id')
async function foo() {
   let first = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then((response) => {
            let divUser = document.createElement('div')
            divUser.className = 'divUser'
            let divUserDetail = document.createElement('div')
            divUserDetail.className = 'divUserDetail'
            divUserDetail.innerHTML = `ID: ${response.id}<br>
                    Name: ${response.name}<br>
                    Username: ${response.username}<br>
                    Email: ${response.email}<br>
                    Address:<br><ul>
                        <li>Street: ${response.address.street}
                        <li>Suite: ${response.address.suite}
                        <li>City: ${response.address.city}
                        <li>Zipcode: ${response.address.zipcode}
                        <li>Geo: (lat: ${response.address.geo.lat}, lng: ${response.address.geo.lng})
                        </ul>
                    Phone: ${response.phone}<br>
                    Website: ${response.website}<br>
                    Company:<br><ul>
                        <li>Name: ${response.company.name}
                        <li>Catch Phrase: ${response.company.catchPhrase}
                        <li>BS: ${response.company.bs}
                        </ul>`
            divUser.appendChild(divUserDetail)
            let divUserImg = document.createElement('div')
            let imgUser = document.createElement('img')
            imgUser.src = 'avatar.jpeg'
            divUserImg.appendChild(imgUser)
            divUser.appendChild(divUserImg)
            document.body.appendChild(divUser)
        })
   let second = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => res.json())
        .then((response) =>{
            let posts = response
            let divButton = document.createElement('div')
            divButton.className = 'divButton'
            let hide = document.createElement('button')
            hide.className = 'button'
            hide.innerHTML = `<h1>Пости цього користувача</h1>`
            divButton.appendChild(hide)
            document.body.appendChild(divButton)
            let divPosts = document.createElement('div')
            divPosts.className = 'posts'
            for (let i= 0; i<posts.length; i++){
                let divPost = document.createElement('button');
                divPost.className = `post hide`;
                let idPost = posts[i].id;
                divPost.innerHTML = `${posts[i].title}`;
                divPost.addEventListener('click', function() {
                    window.location.href = `post-details.html?id=${idPost}`;
                });
                divPosts.appendChild(divPost);
            }
            document.body.appendChild(divPosts)
            hide.onclick = function (){
                let divPost = document.getElementsByClassName('post');
                for (let i = 0; i < divPost.length; i++) {
                    divPost[i].classList.toggle('hide');
                }
            };
            console.log(posts)
        })
}
foo()
