class Card {
    constructor(name, rarity, type, elixir, arena, image, stat){
        this.name = name;
        this.rarity = rarity;
        this.type = type;
        this.elixir = elixir;
        this.arena = arena;
        this.image = image;
        this.stat = stat

    }

    CreateCardElement ( ){
        const cardElement = document.createElement("article");
        cardElement.className = ' modal-btn border border-gray-300 rounded-lg shadow-md flex flex-col item-center bg-neutral-100 hover:scale-95 cursor-pointer focus:scale-95 hover:bg-neutral-200 focus:bg-neutral-200';
        cardElement.innerHTML =
         `
            <img src="${this.image}" alt="${this.name}">
        <div class="px-7 pb-4">
            <h2 class="text-lg font-bold ">${this.name}</h2>
            <p class="text-sm"><strong>Rarity:</strong> ${this.rarity} </p>
            <p class="text-sm"><strong>Elixir:</strong> ${this.elixir} </p>
        </div>
        `;
        return cardElement;
    }
}

export default Card