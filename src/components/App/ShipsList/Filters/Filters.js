import React from 'react';
import { func, number, shape } from 'prop-types';
import './Filters.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Filters = ({
    levelRange,
    updateLevelRange,
}) => (
    <div className="Filters">
        <h3>Filters</h3>
        <div className="filter">
            <div className="filter-title">Ship Level</div>
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
                <section>
                    <ul>
                        <label htmlFor="costs">
                            <input type="checkbox" name="unlockCosts" id="costs" />
                            Unlock
                        </label>
                        <label htmlFor="crewRatios">
                            <input type="checkbox" name="unlockCrewRatios" id="crewRatios" />
                            Unlock Crew Ratios
                        </label>
                        <label htmlFor="capacityRatios">
                            <input type="checkbox" name="unlockCapacityRatios" id="capacityRatios" />
                            Unlock Capacity Ratios
                        </label>
                    </ul>
                </section>
                <div className="section">
                    <ul>
                        <label htmlFor="costs">
                            <input type="checkbox" name="totalCosts" id="costs" />
                            Total
                        </label>
                        <label htmlFor="crewRatios">
                            <input type="checkbox" name="totalCrewRatios" id="crewRatios" />
                            Total Crew Ratios
                        </label>
                        <label htmlFor="capacityRatios">
                            <input type="checkbox" name="totalCapacityRatios" id="capacityRatios" />
                            Total Capacity Ratios
                        </label>
                    </ul>
                </div>
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
    updateLevelRange: () => {},
};

export default Filters;
