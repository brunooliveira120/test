const form = document.getElementById('form-numero');
const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
        if(valorA.values >= valorB.values){
            return alert("Valor Digitado Invalido")
        } else {
            return alert("Valor Digitado Valido")
        }
})

console.log(form);