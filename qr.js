let  form=document.querySelector('form')
let input=document.querySelector('input')
let image=document.querySelector('img')

async function getQr(e){
    e.preventDefault()
    let response= await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    console.log(response)
    let qrImage=response.url
    image.setAttribute('src',qrImage)
}

form.addEventListener('submit',getQr)