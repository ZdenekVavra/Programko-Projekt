// ---------------------------------------------------------
// Abstraktní třída – základ pro všechny entity
// ---------------------------------------------------------
abstract class GameEntity {
    protected id: number;
    protected name: string;
    protected level: number;
    protected baseProduction: number;

    constructor(id: number, name: string, baseProduction: number) {
        if (id <= 0) throw new Error("ID musí být kladné.");
        if (!name.trim()) throw new Error("Název nesmí být prázdný.");
        if (baseProduction < 0) throw new Error("Produkce nesmí být záporná.");

        this.id = id;
        this.name = name;
        this.baseProduction = baseProduction;
        this.level = 1;
    }

    public levelUp(): void {
        this.level++;
    }

    public abstract calculateProduction(): number;

    public getInfo(): string {
        return `${this.name} (lvl ${this.level})`;
    }
}

// ---------------------------------------------------------
// Potomek 1 – Hřích
// ---------------------------------------------------------
class Sin extends GameEntity {
    private description: string;

    constructor(id: number, name: string, baseProduction: number, description: string) {
        super(id, name, baseProduction);

        if (!description.trim()) throw new Error("Popis nesmí být prázdný.");
        this.description = description;
    }

    public calculateProduction(): number {
        return this.baseProduction * this.level;
    }
}

// ---------------------------------------------------------
// Potomek 2 – Hrdina
// ---------------------------------------------------------
class Hero extends GameEntity {
    private rarity: string;

    constructor(id: number, name: string, baseProduction: number, rarity: string) {
        super(id, name, baseProduction);

        if (!rarity.trim()) throw new Error("Rarita nesmí být prázdná.");
        this.rarity = rarity;
    }

    public calculateProduction(): number {
        let mult = 1;

        if (this.rarity === "R") mult = 1.0;
        if (this.rarity === "SR") mult = 1.5;
        if (this.rarity === "SSR") mult = 2.0;

        return this.baseProduction * this.level * mult;
    }
}
