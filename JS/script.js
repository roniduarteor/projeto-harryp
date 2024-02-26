
    const baseUrl = 'https://hp-api.onrender.com/api/characters'
    let indiceInicial = 0
    let indiceFinal = 9

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

function mostrarPersonagens(items){ // items vai receber data, q data é os dados da api
    const containerPerso = document.getElementById("characters-cards")

    dataIndice = items
    
    const limitItem = items.slice(indiceInicial, indiceFinal)


    const btnAvancar = document.getElementById("btnAvancar")
    
    btnAvancar.addEventListener('click', ()=>{
        containerPerso.innerHTML = ""
        const limitItem = items.slice(indiceInicial, indiceFinal)

        limitarPersonagens(indiceInicial, indiceFinal, dataIndice).map((item)=>{

        

            const charactersInformations = document.createElement('div')
            charactersInformations.innerHTML = `
    
            <section class="principaisInfos">
    
            <div class="character-img">
                ${addImage(item.image)}
            </div>
            
            <div class="infos-texto">
            <h2>${item.name}</h2>
    
            <h4 class="nickname">Nicknames</h4>
    
            <p class="nicknamesText">${noNicknames(item.alternate_names)}</p>
    
            <a href="" class="saibaMais"><p class="saibaMaisText">Saiba Mais</p></a>
            </div>
            
        </section>
            `;
    
            
    
            charactersInformations.classList.add('charactersBox')
            containerPerso.appendChild(charactersInformations)
        })

        console.log(limitarPersonagens(valorInicial(indiceFinal), valorFinal(indiceFinal), dataIndice))

        indiceFinal = valorFinal(indiceFinal)
        indiceInicial = valorFinal(indiceInicial)
})


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

        <p class="nicknamesText">${noNicknames(item.alternate_names)}</p>

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

function noNicknames(alternate_names){
    if(alternate_names == ""){
        return `No nicknames found`
    }else{
        return `${alternate_names}`
    }
}


function valorInicial(valInicial) {
    valInicial = valInicial + 9
    return valInicial
}

function valorFinal(valFinal) {
    valFinal = valFinal + 9
    return valFinal
}

function limitarPersonagens(indexInicial, indexFinal, items){
        let indInicial = indexInicial
        let indFinal = indexFinal

        indInicial = indFinal
        indFinal = indFinal + 9
        
         return items.slice(indInicial, indFinal)
}