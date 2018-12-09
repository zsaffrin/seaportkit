
const shipColumns = {
    Header: 'SHIP',
    fixed: 'left',
    columns: [{
        Header: 'Lvl',
        accessor: 'level',
        width: 40,
        className: 'centered',
    }, {
        Header: 'Name',
        accessor: 'name',
        className: 'bolded',
    }, {
        Header: '⚓️',
        accessor: 'slots',
        width: 30,
        className: 'centered',
    }],
};

const unlockColumns = {
    Header: 'UNLOCK',
    columns: [{
        Header: 'XP',
        accessor: 'unlockXp',
    }, {
        Header: 'Crew',
        accessor: 'unlockCrew',
    }, {
        Header: 'Capacity',
        accessor: 'unlockCapacity',
    }, {
        Header: 'Coins',
        accessor: 'unlockCoins',
    }, {
        Header: 'Wood',
        accessor: 'unlockWood',
    }, {
        Header: 'Stone',
        accessor: 'unlockStone',
    }, {
        Header: 'Iron',
        accessor: 'unlockIron',
    }, {
        Header: 'Gems',
        accessor: 'unlockGems',
    }],
};

const totalColumns = {
    Header: 'TOTAL',
    columns: [{
        Header: 'XP',
        accessor: 'totalXp',
    }, {
        Header: 'Crew',
        accessor: 'totalCrew',
    }, {
        Header: 'Capacity',
        accessor: 'totalCapacity',
    }, {
        Header: 'Coins',
        accessor: 'totalCoins',
    }, {
        Header: 'Wood',
        accessor: 'totalWood',
    }, {
        Header: 'Stone',
        accessor: 'totalStone',
    }, {
        Header: 'Iron',
        accessor: 'totalIron',
    }, {
        Header: 'Gems',
        accessor: 'totalGems',
    }],
};

const unlockCrewRatioColumns = {
    Header: 'UNLOCK CREW-COST RATIOS',
    columns: [{
        Header: 'Crew',
        accessor: 'unlockCrew',
    }, {
        Header: 'Coins',
        accessor: 'unlockCrewCoinRatio',
    }, {
        Header: 'Wood',
        accessor: 'unlockCrewWoodRatio',
    }, {
        Header: 'Stone',
        accessor: 'unlockCrewStoneRatio',
    }, {
        Header: 'Iron',
        accessor: 'unlockCrewIronRatio',
    }, {
        Header: 'Gems',
        accessor: 'unlockCrewGemRatio',
    }],
};

const unlockCapacityRatioColumns = {
    Header: 'UNLOCK CAPACITY-COST RATIOS',
    columns: [{
        Header: 'Capacity',
        accessor: 'unlockCapacity',
    }, {
        Header: 'Coins',
        accessor: 'unlockCapacityCoinRatio',
    }, {
        Header: 'Wood',
        accessor: 'unlockCapacityWoodRatio',
    }, {
        Header: 'Stone',
        accessor: 'unlockCapacityStoneRatio',
    }, {
        Header: 'Iron',
        accessor: 'unlockCapacityIronRatio',
    }, {
        Header: 'Gems',
        accessor: 'unlockCapacityGemRatio',
    }],
};

const totalCrewRatioColumns = {
    Header: 'TOTAL CREW-COST RATIOS',
    columns: [{
        Header: 'Crew',
        accessor: 'totalCrew',
    }, {
        Header: 'Coins',
        accessor: 'totalCrewCoinRatio',
    }, {
        Header: 'Wood',
        accessor: 'totalCrewWoodRatio',
    }, {
        Header: 'Stone',
        accessor: 'totalCrewStoneRatio',
    }, {
        Header: 'Iron',
        accessor: 'totalCrewIronRatio',
    }, {
        Header: 'Gems',
        accessor: 'totalCrewGemRatio',
    }],
};

const totalCapacityRatioColumns = {
    Header: 'TOTAL CAPACITY-COST RATIOS',
    columns: [{
        Header: 'Capacity',
        accessor: 'totalCapacity',
    }, {
        Header: 'Coins',
        accessor: 'totalCapacityCoinRatio',
    }, {
        Header: 'Wood',
        accessor: 'totalCapacityWoodRatio',
    }, {
        Header: 'Stone',
        accessor: 'totalCapacityStoneRatio',
    }, {
        Header: 'Iron',
        accessor: 'totalCapacityIronRatio',
    }, {
        Header: 'Gems',
        accessor: 'totalCapacityGemRatio',
    }],
};

export {
    shipColumns,
    unlockColumns,
    unlockCapacityRatioColumns,
    unlockCrewRatioColumns,
    totalColumns,
    totalCrewRatioColumns,
    totalCapacityRatioColumns,
};
