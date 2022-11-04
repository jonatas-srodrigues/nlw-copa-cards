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
        `${createGame('catar','unitedkingdom','16:00')}` 
    ) +

    createCard(   
        '28/11',
        'SEGUNDA',
        `${createGame('switzerland','brazil','13:00')}` +
        `${createGame('portugal','uruguai','16:00')}`
    ) +

    createCard(   
        '02/12',
        'SEXTA',
        `${createGame('brazil','cameroon','16:00')}`
    )