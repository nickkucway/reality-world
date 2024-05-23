const btns = document.querySelectorAll('nav button')
const sections = document.querySelectorAll('section')

for (let btn of btns){
    btn.addEventListener('click', (event) =>{
        for (let section of sections){
            section.style.display = 'none'
            if (event.target.innerText.toLowerCase()===section.id){
                section.style.display = 'flex'
            }
        }
    })
}