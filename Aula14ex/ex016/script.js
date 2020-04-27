
function contar(){
    var res = document.querySelector('div#res')
    res.innerHTML = `Entrou`

    var ini = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpas')
    res.innerHTML = `Contanto <br>`
    for (var c=Number(ini.value); c<= Number(fim.value); c=c+Number(pass.value))
    {
        res.innerHTML +=  `${c} \u{1F600} `
    }
}