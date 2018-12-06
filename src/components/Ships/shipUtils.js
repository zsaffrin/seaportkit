
const prepareShipsData = (rawShipsData) => {
    const preparedShipsData = rawShipsData.map(({
        levelUnlocked,
        name,
    }) => ({
        level: levelUnlocked,
        name,
    }));

    return preparedShipsData;
};

export default prepareShipsData;
