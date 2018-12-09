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
            if (!max || i[key] > max) {
                max = i[key];
            }
            if (!min || i[key] < min) {
                min = i[key];
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
            const { filterLevel } = this.state;
            const { max, min } = filterLevel;
            const { level } = ship;

            return level >= min && level <= max;
        });

        return filteredShips;
    }

    render() {
        const {
            filterLevel,
            ships,
            showColumns,
        } = this.state;

        const filteredShips = this.filterShips(ships);

        const levelRangeLimits = this.determineRangeMinMax(ships, 'level');

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
                    updateLevelRange={this.updateFilterLevelRange}
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
