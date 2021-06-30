const result = document.getElementById('result')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const input = document.getElementById('num-input')

plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)

function handleMinus()  {
    result.innerText -= parseInt(input.value)

}
function handlePlus()   {
    result.innerText += parseInt(input.value)
}