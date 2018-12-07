
const prepareShipsData = (rawShipsData) => {
    const formatNumberIfPresent = number => (
        number ? number.toLocaleString() : '-'
    );

    const preparedShipsData = rawShipsData.map(({
        levelUnlocked,
        name,
        unlock,
        totals,
    }) => ({
        level: levelUnlocked,
        name,
        unlockXp: unlock ? formatNumberIfPresent(unlock.xp) : '-',
        unlockCrew: unlock ? unlock.crew : '-',
        unlockCapacity: unlock ? unlock.capacity : '-',
        unlockCoins: unlock ? formatNumberIfPresent(unlock.costs.coins) : '-',
        unlockWood: unlock ? formatNumberIfPresent(unlock.costs.wood) : '-',
        unlockStone: unlock ? formatNumberIfPresent(unlock.costs.stone) : '-',
        unlockIron: unlock ? formatNumberIfPresent(unlock.costs.iron) : '-',
        unlockGems: unlock ? formatNumberIfPresent(unlock.costs.gems) : '-',
        totalXp: totals ? formatNumberIfPresent(totals.xp) : '-',
        totalCrew: totals ? totals.crew : '-',
        totalCapacity: totals ? totals.capacity : '-',
        totalCoins: totals ? formatNumberIfPresent(totals.costs.coins) : '-',
        totalWood: totals ? formatNumberIfPresent(totals.costs.wood) : '-',
        totalStone: totals ? formatNumberIfPresent(totals.costs.stone) : '-',
        totalIron: totals ? formatNumberIfPresent(totals.costs.iron) : '-',
        totalGems: totals ? formatNumberIfPresent(totals.costs.gems) : '-',
    }));

    return preparedShipsData;
};

export default prepareShipsData;
