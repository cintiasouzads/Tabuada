function tabuada() {
    let num = document.getElementById('txtn') //variável para a tag p
    let tab = document.getElementById('seltab') //variável para a tag input
    if (num.value.length == 0) { //se o valor inserido for zero..
        window.alert('Digite um número')// aparecerá um alerta
    } else { //se não
     let n = Number(num.value) // variável para reconhecer o numero que for inserido
     let c = 1 // contador começa com 1
     tab.innerHTML = '' 
     while ( c <= 10){ // enquanto o contador for menos ou igual a 10
    // agora é necessário criar um elemento option no select pelo JS,pois dentro so select precisa de options
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++
        }


    }

}



