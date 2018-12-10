import React from 'react';
import { shape, arrayOf } from 'prop-types';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
import './ShipsList.css';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

const ShipsList = ({ data, columns }) => {
    const pageSize = data.length > 20 ? data.length : 20;

    return (
        <ReactTableFixedColumns
            data={data}
            className="-striped -highlight"
            columns={columns}
            defaultSorted={[{
                id: 'level',
                desc: false,
            }]}
            pageSize={pageSize}
            showPagination={false}
            style={{
                fontSize: '.8rem',
            }}
        />
    );
};
ShipsList.propTypes = {
    data: arrayOf(shape({})),
    columns: arrayOf(shape({})),
};
ShipsList.defaultProps = {
    data: [],
    columns: [],
};

export default ShipsList;
