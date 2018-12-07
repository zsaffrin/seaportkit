import React from 'react';
import { func, number, shape } from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './Filters.css';

const Filters = ({
    levelRange,
    updateLevelRange,
}) => (
    <div className="Filters">
        <div className="filter">
            <div className="filter-title">Unlock Level</div>
            <div className="filter-content">
                <InputRange
                    draggableTrack
                    maxValue={350}
                    minValue={0}
                    value={levelRange}
                    onChange={val => updateLevelRange(val)}
                />
            </div>
        </div>
    </div>
);
Filters.propTypes = {
    levelRange: shape({
        max: number,
        min: number,
    }),
    updateLevelRange: func,
};
Filters.defaultProps = {
    levelRange: {
        max: 350,
        min: 0,
    },
    updateLevelRange: () => { },
};

export default Filters;
