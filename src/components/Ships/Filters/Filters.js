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
    static propTypes = {
        levelRange: shape({
            max: number,
            min: number,
        }),
        levelRangeLimits: shape({
            max: number,
            min: number,
        }),
        showFilter: shape({
            showTotals: bool,
            showUnlock: bool,
            showUnlockCapacityRatios: bool,
            showUnlockCrewRatios: bool,
            showTotalCapacityRatios: bool,
            showTotalCrewRatios: bool,
        }),
        updateLevelRange: func,
        updateShowFilter: func,
    };

    static defaultProps = {
        levelRange: {
            max: 350,
            min: 0,
        },
        levelRangeLimits: {
            max: 350,
            min: 0,
        },
        showFilter: shape({
            showTotals: false,
            showUnlock: false,
            showUnlockCapacityRatios: false,
            showUnlockCrewRatios: false,
            showTotalCapacityRatios: false,
            showTotalCrewRatios: false,
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
            levelRangeLimits,
            showFilter,
        } = this.props;
        const {
            showUnlock,
            showUnlockCapacityRatios,
            showUnlockCrewRatios,
            showTotals,
            showTotalCapacityRatios,
            showTotalCrewRatios,
        } = showFilter;

        const levelRangeSliderLimits = {
            max: levelRangeLimits.max ? levelRangeLimits.max : 350,
            min: levelRangeLimits.min ? levelRangeLimits.min : 0,
        };

        return (
            <div className="Filters">
                <div className="column">
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
                            <label className="horiz-check" htmlFor="showUnlockCapacityRatios">
                                <input
                                    type="checkbox"
                                    name="showUnlockCapacityRatios"
                                    id="showUnlockCapacityRatios"
                                    value={showUnlockCapacityRatios}
                                    checked={showUnlockCapacityRatios}
                                    onChange={this.handleCheckboxChange}
                                />
                                Unlock Capacity-Cost Ratios
                            </label>
                            <label className="horiz-check" htmlFor="showUnlockCrewRatios">
                                <input
                                    type="checkbox"
                                    name="showUnlockCrewRatios"
                                    id="showUnlockCrewRatios"
                                    value={showUnlockCrewRatios}
                                    checked={showUnlockCrewRatios}
                                    onChange={this.handleCheckboxChange}
                                />
                                Unlock Crew-Cost Ratios
                            </label>
                            <label className="horiz-check" htmlFor="showTotalCapacityRatios">
                                <input
                                    type="checkbox"
                                    name="showTotalCapacityRatios"
                                    id="showTotalCapacityRatios"
                                    value={showTotalCapacityRatios}
                                    checked={showTotalCapacityRatios}
                                    onChange={this.handleCheckboxChange}
                                />
                                Total Capacity-Cost Ratios
                            </label>
                            <label className="horiz-check" htmlFor="showTotalCrewRatios">
                                <input
                                    type="checkbox"
                                    name="showTotalCrewRatios"
                                    id="showTotalCrewRatios"
                                    value={showTotalCrewRatios}
                                    checked={showTotalCrewRatios}
                                    onChange={this.handleCheckboxChange}
                                />
                                Total Crew-Cost Ratios
                            </label>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="filter">
                        <div className="filter-title">Unlock Level</div>
                        <div className="filter-content range-slider">
                            <InputRange
                                draggableTrack
                                maxValue={levelRangeSliderLimits.max}
                                minValue={levelRangeSliderLimits.min}
                                value={levelRange}
                                onChange={this.handleUnlockRangeUpdate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
