import Stats from './stats.js'
import Card from './card.js'
import modal from './cardModal.js'

const GetData = async () => {

    const dataArr = []

    await fetch('./assets/data/clash.json')
    .then(response => response.json())
    .then(data => {
        data.cards.forEach( (card) => {
            const newStat = new Stats(
                card.stats.damage,
                card.stats.dps,
                card.stats.hitpoints,
                card.stats.hit_speed,
                card.stats.targets,
                card.stats.speed,
                card.stats.range
            );

            const newCard = new Card(
                card.name,
                card.rarity,
                card.type,
                card.elixir,
                card.arena,
                card.image,
                newStat
            );

            // console.log(newCard);

            dataArr.push(newCard);
        });
    });

    return dataArr;
}

const DisplayCards = (data) => {
    const CardArea = document.querySelector("#card-grid");
    data.forEach( (card) => {
        const cardElement = card.CreateCardElement(data);
        CardArea.appendChild(cardElement);

    });
}



const main = async () => {
    const data = await GetData();
    DisplayCards(data);
    modal(document.querySelectorAll('article'), data)    
};

main();