
const prepareShipsData = (rawShipsData) => {
    const formatNumberIfPresent = number => (
        number ? number.toLocaleString() : '-'
    );

    const round = (val, decimals) => {
        const rounded = Math.round(`${val}e${decimals}`);
        return Number(`${rounded}e-${decimals}`);
    };

    const calcRatio = (a, b) => {
        if (!a || !b) {
            return '-';
        }
        const ratio = (b / a);
        return round(ratio, 2);
    };

    const preparedShipsData = rawShipsData.map(({
        levelUnlocked,
        name,
        slots,
        unlock,
        totals,
    }) => ({
        level: levelUnlocked,
        name: name || '',
        slots: slots || null,
        unlockXp: unlock ? formatNumberIfPresent(unlock.xp) : '-',
        unlockCrew: unlock ? unlock.crew : '-',
        unlockCapacity: unlock ? unlock.capacity : '-',
        unlockCoins: unlock ? formatNumberIfPresent(unlock.costs.coins) : '-',
        unlockWood: unlock ? formatNumberIfPresent(unlock.costs.wood) : '-',
        unlockStone: unlock ? formatNumberIfPresent(unlock.costs.stone) : '-',
        unlockIron: unlock ? formatNumberIfPresent(unlock.costs.iron) : '-',
        unlockGems: unlock ? formatNumberIfPresent(unlock.costs.gems) : '-',
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
        totalXp: totals ? formatNumberIfPresent(totals.xp) : '-',
        totalCrew: totals ? totals.crew : '-',
        totalCapacity: totals ? totals.capacity : '-',
        totalCoins: totals ? formatNumberIfPresent(totals.costs.coins) : '-',
        totalWood: totals ? formatNumberIfPresent(totals.costs.wood) : '-',
        totalStone: totals ? formatNumberIfPresent(totals.costs.stone) : '-',
        totalIron: totals ? formatNumberIfPresent(totals.costs.iron) : '-',
        totalGems: totals ? formatNumberIfPresent(totals.costs.gems) : '-',
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

    return preparedShipsData;
};

export default prepareShipsData;
