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
        mostrarPersonagens(data)
    })

    .catch((err)=>console.log(err))
})

function mostrarPersonagens(items){ // items vai receber data, q data é os dados da api
    const containerPerso = document.getElementById("characters-cards")
    const limitItem = items.slice(0,9)
    limitItem.map((item)=>{

        

        const charactersInformations = document.createElement('div')
        charactersInformations.innerHTML = `

        <section class="principaisInfos">

        <div class="character-img">
            ${addImage(item.image)}
        </div>
        
        <div class="infos-texto">
        <h2>${item.name}</h2>

        <h4 class="nickname">Nicknames</h4>

        <p class="nicknamesText">${item.alternate_names}</p>

        <a href="" class="saibaMais"><p class="saibaMaisText">Saiba Mais</p></a>
        </div>
        
    </section>
        `;

        

        charactersInformations.classList.add('charactersBox')
        containerPerso.appendChild(charactersInformations)
    })
}

function addImage(image){
    if(image == ""){
        return `<img src="./img/noImage.png"">`
    }else{
        return `<img src=${image}>`
    }
}

function charactersLimit(index){

}