import React, { Component } from 'react';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import { db } from '../../firebase';
import prepareShipsData from './shipUtils';
import 'react-table/react-table.css';
import './Ships.css';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

class Ships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingShips: false,
            ships: [],
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
        const { loadingShips, ships } = this.state;

        return (
            <div className="Ships">
                <h2>Ships</h2>
                <p>{loadingShips ? 'Loading...' : ''}</p>
                <ReactTableFixedColumns
                    data={ships}
                    className="-striped -highlight"
                    columns={[
                        {
                            Header: 'SHIP',
                            fixed: 'left',
                            columns: [
                                {
                                    Header: 'Lvl',
                                    accessor: 'level',
                                },
                                {
                                    Header: 'Name',
                                    accessor: 'name',
                                },
                            ],
                        },
                    ]}
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

export default Ships;
