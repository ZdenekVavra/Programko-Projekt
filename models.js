"use strict";
// ---------------------------------------------------------
// Abstraktní třída – základ pro všechny entity
// ---------------------------------------------------------
class GameEntity {
    id;
    name;
    level;
    baseProduction;
    constructor(id, name, baseProduction) {
        if (id <= 0)
            throw new Error("ID musí být kladné.");
        if (!name.trim())
            throw new Error("Název nesmí být prázdný.");
        if (baseProduction < 0)
            throw new Error("Produkce nesmí být záporná.");
        this.id = id;
        this.name = name;
        this.baseProduction = baseProduction;
        this.level = 1;
    }
    levelUp() {
        this.level++;
    }
    getInfo() {
        return `${this.name} (lvl ${this.level})`;
    }
}
// ---------------------------------------------------------
// Potomek 1 – Hřích
// ---------------------------------------------------------
class Sin extends GameEntity {
    description;
    constructor(id, name, baseProduction, description) {
        super(id, name, baseProduction);
        if (!description.trim())
            throw new Error("Popis nesmí být prázdný.");
        this.description = description;
    }
    calculateProduction() {
        return this.baseProduction * this.level;
    }
}
// ---------------------------------------------------------
// Potomek 2 – Hrdina
// ---------------------------------------------------------
class Hero extends GameEntity {
    rarity;
    constructor(id, name, baseProduction, rarity) {
        super(id, name, baseProduction);
        if (!rarity.trim())
            throw new Error("Rarita nesmí být prázdná.");
        this.rarity = rarity;
    }
    calculateProduction() {
        let mult = 1;
        if (this.rarity === "R")
            mult = 1.0;
        if (this.rarity === "SR")
            mult = 1.5;
        if (this.rarity === "SSR")
            mult = 2.0;
        return this.baseProduction * this.level * mult;
    }
}
