const result = document.getElementById('result')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const input = document.getElementById('num-input')
const reset = document.getElementById('reset')

plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)
reset.addEventListener('click', handleReset)

function handleMinus()  {
    result.innerText -= parseInt(input.value)
    if (parseInt(result.innerText) < 0) {
        result.style.color = 'red'
    }

}
function handlePlus()   {
    result.innerText = parseInt(input.value) + parseInt(result.innerText)
    if (parseInt(result.innerText) >= 0) {
        result.style.color = 'black'
    }
}

function handleReset() {
    console.log('party')
    result.style.color = 'black'
    result.innerText = 0

}