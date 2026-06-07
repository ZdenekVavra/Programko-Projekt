"use strict";
let magic = 0;
let sins = [];
let heroes = [];
window.onload = () => {
    const magicSpan = document.getElementById("magic");
    const prodSpan = document.getElementById("prod");
    const sinsDiv = document.getElementById("sins");
    const heroesDiv = document.getElementById("heroes");
    // vytvoření instancí tříd
    sinsData.forEach(s => sins.push(new Sin(s.name, s.base, s.cost)));
    heroesData.forEach(h => heroes.push(new Hero(h.name, h.base, h.cost)));
    // klikání
    document.getElementById("click").onclick = () => {
        magic++;
        render();
    };
    function render() {
        magicSpan.textContent = magic.toString();
        prodSpan.textContent = totalProduction().toString();
        sinsDiv.innerHTML = "";
        sins.forEach((s, i) => {
            sinsDiv.innerHTML += `
                <div>
                    ${s.name} – lvl: ${s.level} – cena: ${s.cost}
                    <button onclick="buySin(${i})">Koupit</button>
                </div>
            `;
        });
        heroesDiv.innerHTML = "";
        heroes.forEach((h, i) => {
            heroesDiv.innerHTML += `
                <div>
                    ${h.name} – lvl: ${h.level} – cena: ${h.cost}
                    <button onclick="buyHero(${i})">Koupit</button>
                </div>
            `;
        });
    }
    // funkce dostupné z HTML
    window.buySin = (i) => {
        if (magic >= sins[i].cost) {
            magic -= sins[i].cost;
            sins[i].levelUp();
            render();
        }
    };
    window.buyHero = (i) => {
        if (magic >= heroes[i].cost) {
            magic -= heroes[i].cost;
            heroes[i].levelUp();
            render();
        }
    };
    function totalProduction() {
        let sum = 0;
        sins.forEach(s => sum += s.getProduction());
        heroes.forEach(h => sum += h.getProduction());
        return sum;
    }
    // produkce každou sekundu
    setInterval(() => {
        magic += totalProduction();
        render();
    }, 1000);
    render();
};
