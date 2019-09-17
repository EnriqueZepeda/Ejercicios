let inputConcepto = document.getElementById('inputConcepto')
let inputMonto = document.getElementById('inputMonto')
let inputTemporalidad = document.getElementById('inputTemporalidad')
let inputDia = document.getElementById('inputDia')
let inputBanco = document.getElementById('inputBanco')
let inputCuenta = document.getElementById('inputCuenta')
let buttonSubmit = document.getElementById('buttonSubmit')
let cConcepto = document.getElementById('cConcepto')
let cMonto = document.getElementById('cMonto')
let cTemporalidad = document.getElementById('cTemporalidad')
let cDia = document.getElementById('cDia')
let cBanco = document.getElementById('cBanco')
let cCuenta = document.getElementById('cCuenta')
const fijo = () => {
    let concepto = inputConcepto.value
    let monto = inputMonto.value
    let temporalidad = inputTemporalidad.value
    let dia = inputDia.value
    let banco = inputBanco.value
    let cuenta = inputCuenta.value
    inputConcepto.style.display='none'
    cConcepto.innerHTML = concepto
    inputMonto.style.display = 'none'
    cMonto.innerHTML = monto
    inputTemporalidad.style.display = 'none'
    cTemporalidad.innerHTML = temporalidad
    inputDia.style.display = 'none'
    cDia.innerHTML = dia
    inputBanco.style.display = 'none'
    cBanco.innerHTML = banco
    inputCuenta.style.display = 'none'
    cCuenta.innerHTML = cuenta
    buttonSubmit.innerHTML = 'Continuar'
}
buttonSubmit.addEventListener('click', fijo)