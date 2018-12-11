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
        unlockCrewRange: shape({
            max: number,
            min: number,
        }),
        unlockCrewRangeLimits: shape({
            max: number,
            min: number,
        }),
        unlockCapacityRange: shape({
            max: number,
            min: number,
        }),
        unlockCapacityRangeLimits: shape({
            max: number,
            min: number,
        }),
        totalCrewRange: shape({
            max: number,
            min: number,
        }),
        totalCrewRangeLimits: shape({
            max: number,
            min: number,
        }),
        totalCapacityRange: shape({
            max: number,
            min: number,
        }),
        totalCapacityRangeLimits: shape({
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
        updateUnlockCrewRange: func,
        updateUnlockCapacityRange: func,
        updateTotalCrewRange: func,
        updateTotalCapacityRange: func,
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
        unlockCrewRange: {
            max: 250,
            min: 0,
        },
        unlockCrewRangeLimits: {
            max: 250,
            min: 0,
        },
        unlockCapacityRange: {
            max: 1058,
            min: 0,
        },
        unlockCapacityRangeLimits: {
            max: 1058,
            min: 0,
        },
        totalCrewRange: {
            max: 250,
            min: 0,
        },
        totalCrewRangeLimits: {
            max: 250,
            min: 0,
        },
        totalCapacityRange: {
            max: 1058,
            min: 0,
        },
        totalCapacityRangeLimits: {
            max: 1058,
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
        updateUnlockCrewRange: () => { },
        updateUnlockCapacityRange: () => { },
        updateTotalCrewRange: () => { },
        updateTotalCapacityRange: () => { },
        updateShowFilter: () => { },
    };

    handleCheckboxChange = (e) => {
        const { updateShowFilter } = this.props;
        updateShowFilter(e.target.name);
    };

    render() {
        const {
            levelRange,
            levelRangeLimits,
            unlockCrewRange,
            unlockCrewRangeLimits,
            unlockCapacityRange,
            unlockCapacityRangeLimits,
            totalCrewRange,
            totalCrewRangeLimits,
            totalCapacityRange,
            totalCapacityRangeLimits,
            updateLevelRange,
            updateUnlockCrewRange,
            updateUnlockCapacityRange,
            updateTotalCrewRange,
            updateTotalCapacityRange,
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
                    <div className="row">
                        <div className="filter">
                            <div className="filter-title">Level</div>
                            <div className="filter-content range-slider">
                                <InputRange
                                    draggableTrack
                                    maxValue={levelRangeLimits.max}
                                    minValue={levelRangeLimits.min}
                                    value={levelRange}
                                    onChange={val => updateLevelRange(val)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="filter">
                            <div className="filter-title">Unlock Crew</div>
                            <div className="filter-content range-slider">
                                <InputRange
                                    draggableTrack
                                    maxValue={unlockCrewRangeLimits.max}
                                    minValue={unlockCrewRangeLimits.min}
                                    value={unlockCrewRange}
                                    onChange={val => updateUnlockCrewRange(val)}
                                />
                            </div>
                        </div>
                        <div className="filter">
                            <div className="filter-title">Unlock Capacity</div>
                            <div className="filter-content range-slider">
                                <InputRange
                                    draggableTrack
                                    maxValue={unlockCapacityRangeLimits.max}
                                    minValue={unlockCapacityRangeLimits.min}
                                    value={unlockCapacityRange}
                                    onChange={val => updateUnlockCapacityRange(val)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="filter">
                            <div className="filter-title">Total Crew</div>
                            <div className="filter-content range-slider">
                                <InputRange
                                    draggableTrack
                                    maxValue={totalCrewRangeLimits.max}
                                    minValue={totalCrewRangeLimits.min}
                                    value={totalCrewRange}
                                    onChange={val => updateTotalCrewRange(val)}
                                />
                            </div>
                        </div>
                        <div className="filter">
                            <div className="filter-title">Total Capacity</div>
                            <div className="filter-content range-slider">
                                <InputRange
                                    draggableTrack
                                    maxValue={totalCapacityRangeLimits.max}
                                    minValue={totalCapacityRangeLimits.min}
                                    value={totalCapacityRange}
                                    onChange={val => updateTotalCapacityRange(val)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;
