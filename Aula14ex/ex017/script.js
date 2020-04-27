function calculaTabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('tabres')
    n = Number(num.value)
    if (num.value == '') {
        window.alert('Verifique os dados e tente novamente!')
        
    } 
    else{
        tab.innerHTML = ''
        for (var i=1; i<=10; i++){
            s = n*i
            //res.innerHTML += `${i} x ${n} = ${s}<br>`
            let item = document.createElement('option')
            item.text = `${i} x ${n} = ${s}`
            item.value = `tab${i}`
            tab.appendChild(item)

        }
    }
}