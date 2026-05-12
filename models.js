"use strict";
// Vytvoření hříchu
function createSin(id, name, baseProduction) {
    return {
        id,
        name,
        level: 1,
        baseProduction,
        type: "sin"
    };
}
// Vytvoření hrdiny
function createHero(id, name, baseProduction) {
    return {
        id,
        name,
        level: 1,
        baseProduction,
        type: "hero"
    };
}
// Zvýšení levelu
function levelUp(entity) {
    entity.level++;
}
// Výpočet produkce
function calculateProduction(entity) {
    if (entity.type === "sin") {
        return entity.baseProduction * entity.level;
    }
    if (entity.type === "hero") {
        return entity.baseProduction * entity.level * 1.5;
    }
    return 0;
}
