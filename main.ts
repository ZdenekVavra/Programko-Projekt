// Pole pro mix různých objektů
const entities: GameEntity[] = [];

// Oživení dat – vytvoření instancí tříd
sinsData.forEach(s => {
    entities.push(new Sin(s.id, s.name, s.baseProduction, s.description));
});

heroesData.forEach(h => {
    entities.push(new Hero(h.id, h.name, h.baseProduction, h.rarity));
});

// Test v konzoli
console.log("=== TEST TŘÍD – POLYMORFISMUS ===");

entities.forEach(e => {
    e.levelUp(); // zvýšíme level
    console.log(`${e.getInfo()} → produkce: ${e.calculateProduction()}`);
});
