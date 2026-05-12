// Vytvoření hříchu
function createSin(id: number, name: string, baseProduction: number) {
    return {
        id,
        name,
        level: 1,
        baseProduction,
        type: "sin" as const
    };
}

// Vytvoření hrdiny
function createHero(id: number, name: string, baseProduction: number) {
    return {
        id,
        name,
        level: 1,
        baseProduction,
        type: "hero" as const
    };
}

// Zvýšení levelu
function levelUp(entity: { level: number }) {
    entity.level++;
}

// Výpočet produkce
function calculateProduction(entity: any): number {
    if (entity.type === "sin") {
        return entity.baseProduction * entity.level;
    }

    if (entity.type === "hero") {
        return entity.baseProduction * entity.level * 1.5;
    }

    return 0;
}
