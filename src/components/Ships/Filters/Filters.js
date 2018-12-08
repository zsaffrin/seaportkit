import React from 'react';
import { bool, func, number, shape } from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './Filters.css';

const Filters = ({
    levelRange,
    updateLevelRange,
    showFilter,
    updateShowFilter,
}) => {
    const { showUnlock, showTotals } = showFilter;

    const handleCheckboxChange = (e) => {
        updateShowFilter(e.target.name);
    };

    return (
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
            <div className="filter">
                <div className="filter-title">Show</div>
                <div className="filter-content">
                    <label className="horiz-check" htmlFor="showUnlock">
                        <input
                            type="checkbox"
                            name="showUnlock"
                            id="showUnlock"
                            value={showUnlock}
                            checked={showUnlock}
                            onChange={handleCheckboxChange}
                        />
                        Unlock
                    </label>
                    <label className="horiz-check" htmlFor="showTotals">
                        <input
                            type="checkbox"
                            name="showTotals"
                            id="showTotals"
                            value={showTotals}
                            checked={showTotals}
                            onChange={handleCheckboxChange}
                        />
                        Totals
                    </label>
                </div>
            </div>
        </div>
    );
};
Filters.propTypes = {
    levelRange: shape({
        max: number,
        min: number,
    }),
    showFilter: shape({
        showTotals: bool,
        showUnlock: bool,
    }),
    updateLevelRange: func,
    updateShowFilter: func,
};
Filters.defaultProps = {
    levelRange: {
        max: 350,
        min: 0,
    },
    showFilter: shape({
        showTotals: false,
        showUnlock: false,
    }),
    updateLevelRange: () => { },
    updateShowFilter: () => { },
};

export default Filters;
