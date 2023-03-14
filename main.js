const form = document.getElementById('form-numero');
const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    function confirmador(valorA,valorB){
        if(valorA < valorB){
            return alert(`Valor= ` + valorA + ` é menor que valor B= ` + valorB)
        }else if(valorA > valorB){
            return alert(`Valor= ` + valorA + ` é igual que valor B= ` + valorB)
        }else if(valorA == valorB){
            return alert(`Valor= ` + valorA + ` é igual que valor B= ` + valorB)
        }
}
})

console.log(form);