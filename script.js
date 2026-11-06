const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const initBt = document.getElementById('start-pause')
const banner = document.querySelector('.app__image')
const textTitleHero = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')

const initPauseBt = document.querySelector('#start-pause span')
const initPauseBtIcon = document.querySelector('.app__card-primary-butto-icon')

const musica = new Audio('/sons/luna-rise-part-one.mp3')
const playSound = new Audio('/sons/play.wav')
const pauseSound = new Audio('/sons/pause.mp3')
const endTimerSound = new Audio('/sons/beep.mp3')
let intervaloId = null

const displayTempo = document.getElementById('timer')
let duracaoTimer = 1500

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
    duracaoTimer = 1500;
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click',  () => {
    duracaoTimer = 300;
    alterarContexto('descanso-curto')    
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click',  () => {
    duracaoTimer = 900;
    alterarContexto('descanso-longo')  
    longoBt.classList.add('active')  
})

function alterarContexto(contexto) {
    mostrarTempo(duracaoTimer)
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

const contagemRegressiva = () => {   
    if (duracaoTimer <= 0)  {
        endTimerSound.play()
        zerar();
        return;
    } 
    duracaoTimer -= 1;
    mostrarTempo()
}

initBt.addEventListener('click', () => {
    if (intervaloId) {
        pauseSound.play();
        zerar();
        return;
    }
    playSound.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    initPauseBt.textContent = "Pausar";
    initPauseBtIcon.setAttribute('src', '/imagens/pause.png')
    
})

function zerar() {
    clearInterval(intervaloId)
    initPauseBt.textContent = "Começar";
    initPauseBtIcon.setAttribute('src', '/imagens/play_arrow.png')

    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(duracaoTimer * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    displayTempo.innerHTML = `${tempoFormatado}`
}
mostrarTempo()