// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayData(data))


// function displayData(data) {
//     const ul = document.getElementById('ul');
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.style.listStyle = 'ol';
//         // li.innerText = user.name;
//         li.innerText = `Name : ${user.name} , Email : ${user.email}`;
//         ul.appendChild(li);
//     }
// }

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post))


function displayPost(post) {
    console.log(post);
    const section = document.getElementById('allPost')
    for (const singlePost of post) {
        // console.log(singlePost)
        const div = document.createElement('div');
        div.style.width = '300px';
        div.style.background = 'gray';
        div.style.color = 'white';
        div.style.border = '5px';
        div.style.borderRadius = '10px';
        div.style.margin = '10px auto';
        div.style.padding = '5px'
        div.innerHTML = `
        <p>ID : ${singlePost.id}</p>
        <p>TITLE : ${singlePost.title}</p>
        <p>POST : ${singlePost.body}</p>
        `
        section.appendChild(div);
    }
}