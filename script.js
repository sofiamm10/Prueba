function handleResponse(question, response) {
    if (question === 'q1') {
        if (response === 'yes') {
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
        } else {
            document.getElementById('question1').style.display = 'none';
            showResponse("Creo que te equivocaste 😢");
        }
    } else if (question === 'q2') {
        if (response === 'yes') {
            showResponse("Felicidades, tienes novia! ❤️❤️❤️");
        } else {
            showResponse("Lo siento tanto, perdiste 😢");
        }
    }
}

function showResponse(message) {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = message;
    responseDiv.style.display = 'block';
}