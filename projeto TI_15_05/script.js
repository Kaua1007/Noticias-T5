// Pega os elementos do HTML corretamente
const modeBtn = document.querySelector('.mode')
const modeIcon = document.querySelector('.mode > img')

// Define o modo padrão como claro
let mode = 'light'

// Recupera o modo salvo no navegador (se houver)
const savedMode = localStorage.getItem('mode')

// Aplica o modo salvo (se existir)
if (savedMode) {
    mode = savedMode
    document.body.className = mode === 'dark' ? 'dark-mode' : 'light-mode'
    modeIcon.src = mode === 'light' ? 'lua.png' : 'sol.png'
}

// Alterna entre claro e escuro ao clicar no botão
modeBtn.addEventListener('click', () => {
    document.body.className = mode === 'light' ? 'dark-mode' : 'light-mode'
    modeIcon.src = mode === 'light' ? 'sol.png' : 'lua.png'
    mode = mode === 'light' ? 'dark' : 'light'
    localStorage.setItem('mode', mode)
})
