import React, { Component } from 'react';
import ShipsList from './ShipsList/ShipsList';
import Filters from './Filters/Filters';
import { db } from '../../firebase';
import prepareShipsData from './shipUtils';
import { shipColumns, unlockColumns, totalColumns } from './columnConfigs';
import './Ships.css';

class Ships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterLevel: {
                max: 90,
                min: 72,
            },
            loadingShips: false,
            ships: [],
            showUnlock: true,
            showTotals: true,
        };
    }

    componentDidMount() {
        this.updateShips();
    }

    getShips = async () => {
        const response = await db.collection('ships').get();
        const ships = [];
        await response.forEach(doc => ships.push(doc.data()));

        return ships;
    }

    updateFilterLevelRange = (newRange) => {
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

    updateShips() {
        this.setState({
            loadingShips: true,
        });
        this.getShips().then((ships) => {
            const preparedShipsData = prepareShipsData(ships);
            this.setState({
                loadingShips: false,
                ships: preparedShipsData,
            });
        });
    }

    render() {
        const {
            filterLevel,
            loadingShips,
            ships,
            showUnlock,
            showTotals,
        } = this.state;

        const filteredShips = this.filterShips(ships);

        const columnConfig = [shipColumns];
        if (showUnlock) { columnConfig.push(unlockColumns); }
        if (showTotals) { columnConfig.push(totalColumns); }

        return (
            <div className="Ships">
                <h2>
                    Ships
                    { loadingShips ? ' ...' : '' }
                </h2>
                <Filters
                    levelRange={filterLevel}
                    updateLevelRange={this.updateFilterLevelRange}
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
