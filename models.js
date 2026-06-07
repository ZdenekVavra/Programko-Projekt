"use strict";
// Základní třída pro všechny upgrady
class Upgrade {
    name;
    level;
    base;
    cost;
    constructor(name, base, cost) {
        this.name = name;
        this.level = 0;
        this.base = base;
        this.cost = cost;
    }
    // společná logika
    getProduction() {
        return this.level * this.base;
    }
    levelUp() {
        this.level++;
        this.cost = Math.floor(this.cost * 1.3);
    }
}
// Třída pro hříchy (drahé upgrady)
class Sin extends Upgrade {
    constructor(name, base, cost) {
        super(name, base, cost);
    }
}
// Třída pro hrdiny (levné upgrady)
class Hero extends Upgrade {
    constructor(name, base, cost) {
        super(name, base, cost);
    }
}
