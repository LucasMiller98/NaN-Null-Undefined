let btn = document.querySelector('#btn-send-commentary')
btn.onclick = function() {
    let res = document.getElementById('show-commentary')
    let create_p = document.createElement('p')
    let inputName = document.getElementById('input-name')
    let areaComment = document.querySelector('textarea').value
    if(inputName.value.length == 0 && isNaN(inputName) && areaComment == 0  && typeof areaComment != 'undefined' && areaComment != null) {
        create_p.style.background = ``
        create_p.innerHTML = ``
        alert('Caixa de texto vazia')
        res.style.background = '#f00'
        res.style.marginTop = '10px'
        res.style.color = '#fff'
        res.style.padding = '20px 15px'
        res.style.borderRadius = '2rem 1rem'
        res.innerHTML = `Valor inválido, digite o seu nome, por favor. 
        A caixa do comentário está vazia.`
        console.warn('O valor informado não é um número!')
        console.warn('textarea vazio')
        console.warn('Valor indefinido')
        console.warn('Valor nulo')
    }else{
        res.style.background = ``
        let your_name = String(inputName.value)
        create_p.style.background = '#254625'
        create_p.style.marginTop = '10px'
        create_p.style.color = '#fff'
        create_p.style.padding = '20px 15px'
        create_p.style.borderRadius = '2rem 1rem'
        create_p.innerHTML = `${your_name}: ${areaComment}`
        res.appendChild(create_p) 
    }
}
// function countCommentary () {
        //  Lembrar de Trabalhar nisso depois.
        // Estudar
// }
var body = document.querySelector('body')
body.onload = function() {
    var time = document.querySelector('p time')
    var date = new Date()
    var days_of_the_week = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var day = date.getDate()
    var hours = date.getHours()
    var month = date.getMonth()
    var year = date.getFullYear()

    var str_date = `${day} /0 ${month + 1} / ${year}`
    var str_hours = `${hours}:${min}:${sec}`
    
    time.innerHTML = `Olá! Bem-vindo(a)! Hoje é ${days_of_the_week[date.getDay()]}, ${str_date} às ${str_hours}`
}