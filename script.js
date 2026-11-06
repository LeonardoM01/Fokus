const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const initBt = document.getElementById('start-pause')
const displayTempo = document.getElementById('timer')
const banner = document.querySelector('.app__image')
const textTitleHero = document.querySelector('.app__title')
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

focoBt.addEventListener('click',  () => {
    alterarContexto('foco')    
})

curtoBt.addEventListener('click',  () => {
    alterarContexto('descanso-curto')    
})

longoBt.addEventListener('click',  () => {
    alterarContexto('descanso-longo')    
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            textTitleHero.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            textTitleHero.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            textTitleHero.innerHTML = `
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}