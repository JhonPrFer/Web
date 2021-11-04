//função para enviar email ao clicar no submit
function validar(){
//pegando os valores dos inputs
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mesage = document.getElementById('mesage').value

    const data = {name, email, mesage};
    const options = {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    };
    fetch('/api', options);
}