let magic = 0;

let sins: Sin[] = [];
let heroes: Hero[] = [];

window.onload = () => {
    const magicSpan = document.getElementById("magic")!;
    const prodSpan = document.getElementById("prod")!;
    const sinsDiv = document.getElementById("sins")!;
    const heroesDiv = document.getElementById("heroes")!;

    // vytvoření instancí tříd
    sinsData.forEach(s => sins.push(new Sin(s.name, s.base, s.cost)));
    heroesData.forEach(h => heroes.push(new Hero(h.name, h.base, h.cost)));

    // klikání
    document.getElementById("click")!.onclick = () => {
        magic++;
        render();
    };

    function render() {
        magicSpan.textContent = magic.toString();
        prodSpan.textContent = totalProduction().toString();

        sinsDiv.innerHTML = "";
        sins.forEach((s, i) => {
            sinsDiv.innerHTML += `
            <div class="shop-item">
            <img src="img/${s.name}.jpg" alt="${s.name}">
             <div>${s.name} – lvl: ${s.level} – cena: ${s.cost}
             <h3>Produkce: ${s.getProduction()}</h3>
              <button id="koupit"  onclick="buySin(${i})">Koupit</button>
         </div>
         </div> 
            `;
        });

         heroesDiv.innerHTML = "";
        heroes.forEach((h, i) => {
            heroesDiv.innerHTML += `
            <div class="shop-item">
            <img src="img/${h.name}.jpg" alt="${h.name}">
             <div>${h.name} – lvl: ${h.level} – cena: ${h.cost}
              <h3>Produkce: ${h.getProduction()}</h3>
              <button id="koupit"  onclick="buyHero(${i})">Koupit</button>
         </div>
         </div> 
            `;
        });
    }

    // funkce dostupné z HTML
    (window as any).buySin = (i: number) => {
        if (magic >= sins[i].cost) {
            magic -= sins[i].cost;
            sins[i].levelUp();
            render();
        }
    };

    (window as any).buyHero = (i: number) => {
        if (magic >= heroes[i].cost) {
            magic -= heroes[i].cost;
            heroes[i].levelUp();
            render();
        }
    };

    function totalProduction(): number {
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
