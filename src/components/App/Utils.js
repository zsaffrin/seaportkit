
const round = (value, decimals) => {
    const rounded = Math.round(`${value}e${decimals}`);
    return Number(`${rounded}e-${decimals}`);
};

const prepareShipsData = (raw) => {
    const formatNumberIfPresent = val => (
        val ? val.toLocaleString() : '-'
    );

    const calcRatio = (valA, valB) => {
        if (!valA || !valB) {
            return '-';
        }
        const ratio = (valB / valA);
        return round(ratio, 2);
    };

    const finished = raw.map(({
        levelUnlocked,
        name,
        unlock,
        totals,
    }) => ({
        level: levelUnlocked || 0,
        name: name || '',
        unlockCrew: unlock ? unlock.crew || 0 : '-',
        unlockCapacity: unlock ? unlock.capacity || 0 : '-',
        unlockXp: unlock ? formatNumberIfPresent(unlock.xp) : '-',
        unlockCoins: unlock ? formatNumberIfPresent(unlock.costs.coins) : '-',
        unlockWood: unlock ? formatNumberIfPresent(unlock.costs.wood) : '-',
        unlockStone: unlock ? formatNumberIfPresent(unlock.costs.stone) : '-',
        unlockIron: unlock ? formatNumberIfPresent(unlock.costs.iron) : '-',
        unlockGems: unlock ? formatNumberIfPresent(unlock.costs.gems) : '-',
        totalCrew: totals ? totals.crew || 0 : '-',
        totalCapacity: totals ? totals.capacity || 0 : '-',
        totalXp: totals ? formatNumberIfPresent(totals.xp) : '-',
        totalCoins: totals ? formatNumberIfPresent(totals.costs.coins) : '-',
        totalWood: totals ? formatNumberIfPresent(totals.costs.wood) : '-',
        totalStone: totals ? formatNumberIfPresent(totals.costs.stone) : '-',
        totalIron: totals ? formatNumberIfPresent(totals.costs.iron) : '-',
        totalGems: totals ? formatNumberIfPresent(totals.costs.gems) : '-',
        unlockCrewCoinRatio: unlock ? calcRatio(unlock.crew, unlock.costs.coins) : '-',
        unlockCrewWoodRatio: unlock ? calcRatio(unlock.crew, unlock.costs.wood) : '-',
        unlockCrewStoneRatio: unlock ? calcRatio(unlock.crew, unlock.costs.stone) : '-',
        unlockCrewIronRatio: unlock ? calcRatio(unlock.crew, unlock.costs.iron) : '-',
        unlockCrewGemRatio: unlock ? calcRatio(unlock.crew, unlock.costs.gems) : '-',
        unlockCapacityCoinRatio: unlock ? calcRatio(unlock.capacity, unlock.costs.coins) : '-',
        unlockCapacityWoodRatio: unlock ? calcRatio(unlock.capacity, unlock.costs.wood) : '-',
        unlockCapacityStoneRatio: unlock ? calcRatio(unlock.capacity, unlock.costs.stone) : '-',
        unlockCapacityIronRatio: unlock ? calcRatio(unlock.capacity, unlock.costs.iron) : '-',
        unlockCapacityGemRatio: unlock ? calcRatio(unlock.capacity, unlock.costs.gems) : '-',
        totalCrewCoinRatio: totals ? calcRatio(totals.crew, totals.costs.coins) : '-',
        totalCrewWoodRatio: totals ? calcRatio(totals.crew, totals.costs.wood) : '-',
        totalCrewStoneRatio: totals ? calcRatio(totals.crew, totals.costs.stone) : '-',
        totalCrewIronRatio: totals ? calcRatio(totals.crew, totals.costs.iron) : '-',
        totalCrewGemRatio: totals ? calcRatio(totals.crew, totals.costs.gems) : '-',
        totalCapacityCoinRatio: totals ? calcRatio(totals.capacity, totals.costs.coins) : '-',
        totalCapacityWoodRatio: totals ? calcRatio(totals.capacity, totals.costs.wood) : '-',
        totalCapacityStoneRatio: totals ? calcRatio(totals.capacity, totals.costs.stone) : '-',
        totalCapacityIronRatio: totals ? calcRatio(totals.capacity, totals.costs.iron) : '-',
        totalCapacityGemRatio: totals ? calcRatio(totals.capacity, totals.costs.gems) : '-',
    }));

    return finished;
};

export default prepareShipsData;
