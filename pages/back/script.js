let pega_input = document.getElementById('buscar')
let lupa = document.getElementById("min-size-screen")
let altera_size = document.getElementById('perfil')


let lupa_img = document.createElement('img')
lupa_img.setAttribute('src', '../midia/lupa.png')
if(window.innerWidth < 600){
    pega_input.style.display = 'none'
    lupa.appendChild(lupa_img)
    altera_size.style.width = '32px'
}
window.addEventListener("resize", () => {
    const width = window.innerWidth
    
    if(width <= 615){
        pega_input.style.display = 'none'

        if (width >= 325){
            lupa.appendChild(lupa_img)
        }
        altera_size.style.width = '32px'
    }
    else{
        pega_input.style.display = 'inline'
        lupa.innerHTML = ''
        altera_size.style.width = '36px'
    }
})

