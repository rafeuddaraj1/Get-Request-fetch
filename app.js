const btn = document.querySelector('button')
const list = document.querySelector('ul')
btn.addEventListener('click', function (ev) {
    btn.style.backgroundColor = '#31a4f1'
    btn.style.color = '#fff'
    btn.style.border = '1px solid transparent'
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            data.forEach((li,i) => {
                (function (li) {
                    setTimeout(() => {
                        const el = document.createElement('li')
                        el.innerHTML = li.body
                        list.appendChild(el)
                   },i*100) 
                })(li,i)
       })
        })
        .catch(e => {
        console.log(e.message)
    })
})