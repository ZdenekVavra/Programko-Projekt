// Základní třída pro všechny upgrady
class Upgrade {
    name: string;
    level: number;
    base: number;
    cost: number;

    constructor(name: string, base: number, cost: number) {
        this.name = name;
        this.level = 0;
        this.base = base;
        this.cost = cost;
    }

    // společná logika
    getProduction(): number {
        return this.level * this.base;
    }

    levelUp(): void {
        this.level++;
        this.cost = Math.floor(this.cost * 1.3);
    }
}

// Třída pro hříchy (drahé upgrady)
class Sin extends Upgrade {
    constructor(name: string, base: number, cost: number) {
        super(name, base, cost);
    }
}

// Třída pro hrdiny (levné upgrady)
class Hero extends Upgrade {
    constructor(name: string, base: number, cost: number) {
        super(name, base, cost);
    }
}

