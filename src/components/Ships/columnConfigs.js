import React from 'react';

const shipColumns = {
    Header: 'SHIP',
    fixed: 'left',
    columns: [{
        Header: 'Lvl',
        accessor: 'level',
        width: 40,
    }, {
        Header: 'Name',
        accessor: 'name',
        Cell: row => (
            <span style={{ fontWeight: 'bolder' }}>
                {row.value}
            </span>
        ),
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

export {
    shipColumns,
    unlockColumns,
    totalColumns,
};
