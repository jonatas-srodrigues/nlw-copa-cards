function createGame(ply1, ply2, hour) {
    return `
        <!--LISTA DE JOGOS-->
            <li>
                <img src="./assets/icon-${ply1}.svg" alt="${ply1} flag">
                <strong>${hour}</strong>
                <img src="./assets/icon-${ply2}.svg" alt="${ply2} flag">
            </li>
    `
}

let delay = -0.4; //Surgimento inteligente (dinâmico).
/* Criando função para CRIAÇÃO DE CARD - UNITÁRIO */
function createCard(date, day, game) {
    delay = delay + 0.4;
    delay1 = delay +0.6;
    return `
    <section style="animation-delay: ${delay1}s">
        <div class="card" style="animation-delay: ${delay}s">
            <!--DATA DO CARD-->
            <h2>${date}<span>${day}</span></h2>
            <ul>${game}</ul>
            
        </div>
    </section>
    `
}

/* Estrutura do HTML para exportação */

document.querySelector('#cards').innerHTML = 

    createCard(   
        '20/11',
        'DOMINGO',
        `${createGame('catar','ecuador','13:00')}` 
    ) +

    createCard(   
        '21/11',
        'SEGUNDA',
        `${createGame('england','ira','10:00')}` +
        `${createGame('senegal','netherlands','13:00')}` +
        `${createGame('unitedstates','gales','16:00')}` 
    ) +

    createCard(   
        '22/11',
        'TERÇA',
        `${createGame('argentina','saudi','07:00')}` +
        `${createGame('denmark','tunisia','10:00')}` +
        `${createGame('mexico','poland','13:00')}` +
        `${createGame('france','australia','16:00')}`
    ) +
    
    createCard(   
        '23/11',
        'QUARTA',
        `${createGame('morocco','croatia','07:00')}` +
        `${createGame('german','japan','10:00')}` +
        `${createGame('spain','costarica','13:00')}` +
        `${createGame('belgium','canada','16:00')}`
    ) +

    createCard(   
        '24/11',
        'QUINTA',
        `${createGame('switzerland','cameroon','07:00')}` +
        `${createGame('uruguai','southkorea','10:00')}` +
        `${createGame('portugal','ghana','13:00')}` +
        `${createGame('brazil','serbia','16:00')}`
    ) +

    createCard(   
        '25/11',
        'SEXTA',
        `${createGame('gales','ira','07:00')}` +
        `${createGame('catar','senegal','10:00')}` +
        `${createGame('netherlands','ecuador','13:00')}` +
        `${createGame('england','unitedstates','16:00')}`
    ) +

    createCard(   
        '26/11',
        'SÁBADO',
        `${createGame('tunisia','australia','07:00')}` +
        `${createGame('poland','saudi','10:00')}` +
        `${createGame('france','denmark','13:00')}` +
        `${createGame('argentina','mexico','16:00')}`
    ) +

    createCard(   
        '27/11',
        'DOMINGO',
        `${createGame('japan','costarica','07:00')}` +
        `${createGame('belgium','morocco','10:00')}` +
        `${createGame('croatia','canada','13:00')}` +
        `${createGame('spain','german','16:00')}`
    ) +
    
    createCard(   
        '28/11',
        'SEGUNDA',
        `${createGame('cameroon','serbia','07:00')}` +
        `${createGame('southkorea','ghana','10:00')}` +
        `${createGame('switzerland','brazil','13:00')}` +
        `${createGame('portugal','uruguai','16:00')}`
    ) +

    createCard(   
        '02/12',
        'SEXTA',
        `${createGame('brazil','cameroon','16:00')}`
    )