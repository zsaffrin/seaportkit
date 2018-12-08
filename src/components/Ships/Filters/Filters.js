import React, { Component } from 'react';
import {
    bool,
    func,
    number,
    shape,
} from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './Filters.css';

class Filters extends Component {
    propTypes = {
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

    defaultProps = {
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

    handleCheckboxChange = (e) => {
        const { updateShowFilter } = this.props;
        updateShowFilter(e.target.name);
    };

    handleUnlockRangeUpdate = (val) => {
        const { updateLevelRange } = this.props;
        updateLevelRange(val);
    }

    render() {
        const {
            levelRange,
            showFilter,
        } = this.props;
        const { showUnlock, showTotals } = showFilter;

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
                            onChange={this.handleUnlockRangeUpdate}
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
                                onChange={this.handleCheckboxChange}
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
                                onChange={this.handleCheckboxChange}
                            />
                            Totals
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
