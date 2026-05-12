"use strict";
// Pole pro mix entit
const entities = [];
// Oživení hříchů
sinsData.forEach(s => {
    entities.push(createSin(s.id, s.name, s.baseProduction));
});
// Oživení hrdinů
heroesData.forEach(h => {
    entities.push(createHero(h.id, h.name, h.baseProduction));
});
// Test v konzoli
console.log("=== TEST FUNKCÍ – POLYMORFISMUS ===");
entities.forEach(e => {
    levelUp(e);
    const prod = calculateProduction(e);
    console.log(`${e.name} (lvl ${e.level}) → produkce: ${prod}`);
});
