var button = document.getElementById('read_button1');

button.addEventListener('click', function() {
    var card = document.querySelector('.card1');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent1 = 'Fechar';
    }

    button.textContent = 'Abrir';

});


var button = document.getElementById('read_button2');

button.addEventListener('click', function() {
    var card = document.querySelector('.card2');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent2 = 'Fechar';
    }

    button.textContent = 'Abrir';

});


var button = document.getElementById('read_button3');

button.addEventListener('click', function() {
    var card = document.querySelector('.card3');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent3 = 'Fechar';
    }

    button.textContent3 = 'Abrir';

});