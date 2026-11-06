const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const initBt = document.getElementById('start-pause')
const displayTempo = document.getElementById('timer')
const banner = document.querySelector('.app__image')
const textTitleHero = document.querySelector('.app__title')
const textSubtHero = document.querySelector('.app__title-strong')
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

focoBt.addEventListener('click',  () => {
    html.setAttribute('data-contexto', 'foco')
    
})

curtoBt.addEventListener('click',  () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    
})

longoBt.addEventListener('click',  () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    
})