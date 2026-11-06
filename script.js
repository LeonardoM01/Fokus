const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const initBt = document.getElementById('start-pause')
const displayTempo = document.getElementById('timer')
const banner = document.querySelector('.app__image')
const textTitleHero = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

musicaFocoInput.addEventListener('change', () => {
    musica.loop = true;
    if(musica.paused) {
        musica.play();
    }
    else {
        musica.pause();
    }
})

focoBt.addEventListener('click',  () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click',  () => {
    alterarContexto('descanso-curto')    
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click',  () => {
    alterarContexto('descanso-longo')  
    longoBt.classList.add('active')  
})

function alterarContexto(contexto) {
    botoes.forEach((contexto) => {
        contexto.classList.remove('active')
    })
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