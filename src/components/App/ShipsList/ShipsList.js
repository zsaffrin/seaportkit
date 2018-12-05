import React, { Component } from 'react';
import { arrayOf, bool, shape } from 'prop-types';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
import Filters from './Filters/Filters';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

class ShipsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterLevel: {
                min: 70,
                max: 100,
            },
        };
    }

    updateFilterRange = (newRange) => {
        this.setState({
            filterLevel: newRange,
        });
    }

    filterShips(ships) {
        const filteredShips = ships.filter((ship) => {
            const { filterLevel } = this.state;
            const { max, min } = filterLevel;
            const { level } = ship;

            return level >= min && level <= max;
        });

        return filteredShips;
    }

    render() {
        const {
            loading,
            ships,
            showUnlock,
            showTotals,
            showUnlockCapacityRatios,
            showTotalCapacityRatios,
            showUnlockCrewRatios,
            showTotalCrewRatios,
        } = this.props;

        const {
            filterLevel,
        } = this.state;

        const filteredShips = this.filterShips(ships);

        const totalsColumnsConfig = {
            Header: 'TOTAL',
            columns: [
                {
                    Header: 'Crew',
                    accessor: 'totalCrew',
                },
                {
                    Header: 'Capacity',
                    accessor: 'totalCapacity',
                },
                {
                    Header: 'XP',
                    accessor: 'totalXp',
                },
                {
                    Header: 'Coins',
                    accessor: 'totalCoins',
                },
                {
                    Header: 'Wood',
                    accessor: 'totalWood',
                },
                {
                    Header: 'Stone',
                    accessor: 'totalStone',
                },
                {
                    Header: 'Iron',
                    accessor: 'totalIron',
                },
                {
                    Header: 'Gems',
                    accessor: 'totalGems',
                },
            ],
        };

        const unlockColumnsConfig = {
            Header: 'UNLOCK',
            columns: [
                {
                    Header: 'Crew',
                    accessor: 'unlockCrew',
                },
                {
                    Header: 'Capacity',
                    accessor: 'unlockCapacity',
                },
                {
                    Header: 'XP',
                    accessor: 'unlockXp',
                },
                {
                    Header: 'Coins',
                    accessor: 'unlockCoins',
                },
                {
                    Header: 'Wood',
                    accessor: 'unlockWood',
                },
                {
                    Header: 'Stone',
                    accessor: 'unlockStone',
                },
                {
                    Header: 'Iron',
                    accessor: 'unlockIron',
                },
                {
                    Header: 'Gems',
                    accessor: 'unlockGems',
                },
            ],
        };

        const unlockCapacityRatiosColumnsConfig = {
            Header: 'UNLOCK CAPACITY RATIOS',
            columns: [
                {
                    Header: 'Coins',
                    accessor: 'unlockCapacityCoinRatio',
                },
                {
                    Header: 'Wood',
                    accessor: 'unlockCapacityWoodRatio',
                },
                {
                    Header: 'Stone',
                    accessor: 'unlockCapacityStoneRatio',
                },
                {
                    Header: 'Iron',
                    accessor: 'unlockCapacityIronRatio',
                },
                {
                    Header: 'Gems',
                    accessor: 'unlockCapacityGemRatio',
                },
            ],
        };

        const totalCapacityRatiosColumnsConfig = {
            Header: 'TOTAL CAPACITY RATIOS',
            columns: [
                {
                    Header: 'Coins',
                    accessor: 'totalCapacityCoinRatio',
                },
                {
                    Header: 'Wood',
                    accessor: 'totalCapacityWoodRatio',
                },
                {
                    Header: 'Stone',
                    accessor: 'totalCapacityStoneRatio',
                },
                {
                    Header: 'Iron',
                    accessor: 'totalCapacityIronRatio',
                },
                {
                    Header: 'Gems',
                    accessor: 'totalCapacityGemRatio',
                },
            ],
        };

        const unlockCrewRatiosColumnsConfig = {
            Header: 'UNLOCK CREW RATIOS',
            columns: [
                {
                    Header: 'Coins',
                    accessor: 'unlockCrewCoinRatio',
                },
                {
                    Header: 'Wood',
                    accessor: 'unlockCrewWoodRatio',
                },
                {
                    Header: 'Stone',
                    accessor: 'unlockCrewStoneRatio',
                },
                {
                    Header: 'Iron',
                    accessor: 'unlockCrewIronRatio',
                },
                {
                    Header: 'Gems',
                    accessor: 'unlockCrewGemRatio',
                },
            ],
        };

        const totalCrewRatiosColumnsConfig = {
            Header: 'TOTAL CREW RATIOS',
            columns: [
                {
                    Header: 'Coins',
                    accessor: 'totalCrewCoinRatio',
                },
                {
                    Header: 'Wood',
                    accessor: 'totalCrewWoodRatio',
                },
                {
                    Header: 'Stone',
                    accessor: 'totalCrewStoneRatio',
                },
                {
                    Header: 'Iron',
                    accessor: 'totalCrewIronRatio',
                },
                {
                    Header: 'Gems',
                    accessor: 'totalCrewGemRatio',
                },
            ],
        };

        const columnsConfig = [
            {
                Header: 'SHIP',
                columns: [
                    {
                        Header: 'Lvl',
                        accessor: 'level',
                        width: 40,
                    },
                    {
                        Header: 'Name',
                        accessor: 'name',
                        width: 120,
                    },
                ],
                fixed: 'left',
            },
        ];
        if (showUnlock) { columnsConfig.push(unlockColumnsConfig); }
        if (showTotals) { columnsConfig.push(totalsColumnsConfig); }
        if (showUnlockCapacityRatios) { columnsConfig.push(unlockCapacityRatiosColumnsConfig); }
        if (showTotalCapacityRatios) { columnsConfig.push(totalCapacityRatiosColumnsConfig); }
        if (showUnlockCrewRatios) { columnsConfig.push(unlockCrewRatiosColumnsConfig); }
        if (showTotalCrewRatios) { columnsConfig.push(totalCrewRatiosColumnsConfig); }

        return (
            <div className="ShipsList">
                <h2>
                    Ships
                    {loading ? ' ...' : ''}
                </h2>
                <Filters
                    levelRange={filterLevel}
                    updateLevelRange={this.updateFilterRange}
                />
                <ReactTableFixedColumns
                    data={filteredShips}
                    className="-striped -highlight"
                    columns={columnsConfig}
                    showPagination={false}
                    defaultSorted={[
                        {
                            id: 'level',
                            desc: false,
                        },
                    ]}
                />
            </div>
        );
    }
}
ShipsList.propTypes = {
    loading: bool,
    ships: arrayOf(shape({})),
    showUnlock: bool,
    showTotals: bool,
    showUnlockCapacityRatios: bool,
    showTotalCapacityRatios: bool,
    showUnlockCrewRatios: bool,
    showTotalCrewRatios: bool,
};
ShipsList.defaultProps = {
    loading: false,
    ships: [{}],
    showUnlock: true,
    showTotals: true,
    showUnlockCapacityRatios: true,
    showTotalCapacityRatios: true,
    showUnlockCrewRatios: true,
    showTotalCrewRatios: true,
};

export default ShipsList;
