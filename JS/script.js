document.addEventListener('DOMContentLoaded', ()=>{
    const baseUrl = 'https://hp-api.onrender.com/api/characters'

    fetch(baseUrl)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede! Código:' +response.status)
        }
        return response.json()
    })

    .then((data)=>{
        console.log(data)
    })
})