import React, { Component } from 'react';
import ShipsList from './ShipsList/ShipsList';
import Filters from './Filters/Filters';
import { db } from '../../firebase';
import prepareShipsData from './shipUtils';
import {
    shipColumns,
    unlockColumns,
    unlockCapacityRatioColumns,
    unlockCrewRatioColumns,
    totalColumns,
    totalCapacityRatioColumns,
    totalCrewRatioColumns,
} from './columnConfigs';
import './Ships.css';

class Ships extends Component {
    state = {
        filterLevel: {
            max: 100,
            min: 71,
        },
        filterUnlockCrew: {
            max: 250,
            min: 0,
        },
        filterUnlockCapacity: {
            max: 1058,
            min: 0,
        },
        filterTotalCrew: {
            max: 250,
            min: 0,
        },
        filterTotalCapacity: {
            max: 1058,
            min: 0,
        },
        showColumns: {
            showUnlock: true,
            showTotals: true,
            showUnlockCapacityRatios: true,
            showUnlockCrewRatios: true,
            showTotalCapacityRatios: true,
            showTotalCrewRatios: true,
        },
        ships: [],
    };

    componentDidMount() {
        db.collection('ships').onSnapshot((response) => {
            const ships = [];
            response.forEach((doc) => {
                const ship = doc.data();
                ship.id = doc.id;
                ships.push(ship);
            });
            ships.sort((a, b) => (
                b.levelUnlocked - a.levelUnlocked
            ));
            const preparedShips = prepareShipsData(ships);
            this.setState({ ships: preparedShips });
        });
    }

    determineRangeMinMax = (data, key) => {
        let max;
        let min;
        data.forEach((i) => {
            const target = i[key];
            if (!max || target > max) {
                max = target;
            }
            if (!min || target < min) {
                min = target;
            }
        });

        return {
            max,
            min,
        };
    }

    updateFilterLevelRange = (newRange) => {
        this.setState({
            filterLevel: newRange,
        });
    }

    updateFilterUnlockCrewRange = (newRange) => {
        this.setState({
            filterUnlockCrew: newRange,
        });
    }

    updateFilterUnlockCapacityRange = (newRange) => {
        this.setState({
            filterUnlockCapacity: newRange,
        });
    }

    updateFilterTotalCrewRange = (newRange) => {
        this.setState({
            filterTotalCrew: newRange,
        });
    }

    updateFilterTotalCapacityRange = (newRange) => {
        this.setState({
            filterTotalCapacity: newRange,
        });
    }

    toggleShowColumns = (key) => {
        const { showColumns } = this.state;
        const newState = { ...showColumns };
        newState[key] = !newState[key];
        this.setState({
            showColumns: newState,
        });
    }

    filterShips(ships) {
        const filteredShips = ships.filter((ship) => {
            const {
                filterLevel,
                filterUnlockCrew,
                filterUnlockCapacity,
                filterTotalCrew,
                filterTotalCapacity,
            } = this.state;

            const {
                level,
                unlockCrew,
                unlockCapacity,
                totalCrew,
                totalCapacity,
            } = ship;

            return (
                level >= filterLevel.min
                && level <= filterLevel.max
                && unlockCrew >= filterUnlockCrew.min
                && unlockCrew <= filterUnlockCrew.max
                && unlockCapacity >= filterUnlockCapacity.min
                && unlockCapacity <= filterUnlockCapacity.max
                && totalCrew >= filterTotalCrew.min
                && totalCrew <= filterTotalCrew.max
                && totalCapacity >= filterTotalCapacity.min
                && totalCapacity <= filterTotalCapacity.max
            );
        });

        return filteredShips;
    }

    render() {
        const {
            filterLevel,
            filterUnlockCrew,
            filterUnlockCapacity,
            filterTotalCrew,
            filterTotalCapacity,
            ships,
            showColumns,
        } = this.state;

        const filteredShips = this.filterShips(ships);

        const levelRangeLimits = this.determineRangeMinMax(ships, 'level');
        const unlockCrewRangeLimits = this.determineRangeMinMax(ships, 'unlockCrew');
        const unlockCapacityRangeLimits = this.determineRangeMinMax(ships, 'unlockCapacity');
        const totalCrewRangeLimits = this.determineRangeMinMax(ships, 'totalCrew');
        const totalCapacityRangeLimits = this.determineRangeMinMax(ships, 'totalCapacity');

        const columnConfig = [shipColumns];
        const {
            showUnlock,
            showUnlockCapacityRatios,
            showUnlockCrewRatios,
            showTotals,
            showTotalCapacityRatios,
            showTotalCrewRatios,
        } = showColumns;
        if (showUnlock) { columnConfig.push(unlockColumns); }
        if (showTotals) { columnConfig.push(totalColumns); }
        if (showUnlockCapacityRatios) { columnConfig.push(unlockCapacityRatioColumns); }
        if (showUnlockCrewRatios) { columnConfig.push(unlockCrewRatioColumns); }
        if (showTotalCapacityRatios) { columnConfig.push(totalCapacityRatioColumns); }
        if (showTotalCrewRatios) { columnConfig.push(totalCrewRatioColumns); }

        return (
            <div className="Ships">
                <h2>Ships</h2>
                <Filters
                    levelRange={filterLevel}
                    levelRangeLimits={levelRangeLimits}
                    unlockCrewRange={filterUnlockCrew}
                    unlockCrewRangeLimits={unlockCrewRangeLimits}
                    unlockCapacityRange={filterUnlockCapacity}
                    unlockCapacityRangeLimits={unlockCapacityRangeLimits}
                    totalCrewRange={filterTotalCrew}
                    totalCrewRangeLimits={totalCrewRangeLimits}
                    totalCapacityRange={filterTotalCapacity}
                    totalCapacityRangeLimits={totalCapacityRangeLimits}
                    updateLevelRange={this.updateFilterLevelRange}
                    updateUnlockCrewRange={this.updateFilterUnlockCrewRange}
                    updateUnlockCapacityRange={this.updateFilterUnlockCapacityRange}
                    updateTotalCrewRange={this.updateFilterTotalCrewRange}
                    updateTotalCapacityRange={this.updateFilterTotalCapacityRange}
                    showFilter={showColumns}
                    updateShowFilter={this.toggleShowColumns}
                />
                <ShipsList
                    data={filteredShips}
                    columns={columnConfig}
                />
            </div>
        );
    }
}

export default Ships;
