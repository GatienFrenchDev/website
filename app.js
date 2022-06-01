let current_state = "en"

function switchlanguage() {
    if (current_state == "en") {
        document.getElementById('intro').innerText = 'salutations👋, je suis'
        document.getElementById('dev').innerText = 'developper backend 👨‍💻'
        document.getElementById('description').innerHTML = 'Je suis un développeur backend de 17 ans<br>habitant à Tours, France'
        document.getElementById('btn').innerText = 'RECRUTEZ MOI'
        document.getElementById('langue').innerHTML = '🇺🇸'
        current_state = "fr"
        return
    }
    document.getElementById('intro').innerText = 'hi there👋, i\'m'
    document.getElementById('dev').innerText = 'developer backend 👨‍💻'
    document.getElementById('description').innerHTML = 'I\'m a 17 y.o. backend developer<br>based in Tours, France.'
    document.getElementById('btn').innerText = 'HIRE ME'
    document.getElementById('langue').innerHTML = '🇫🇷'
    current_state = "en"
}

document.getElementById('btn').addEventListener('mouseenter', (e) => {
    e.target.innerHTML = 'contact@gatiendev.tk'
})

document.getElementById('btn').addEventListener('mouseleave', (e) => {
    if (current_state == "en") {
        e.target.innerHTML = 'HIRE ME'
    }
    else{
        e.target.innerHTML = 'RECRUTEZ MOI'
    }
})