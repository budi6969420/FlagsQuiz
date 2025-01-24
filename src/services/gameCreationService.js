const createGame = (countries, roundsPerGame) => {
    const getShuffledCountries = () => [...countries].sort(() => Math.random() - 0.5);
    
    const rounds = getShuffledCountries().map((correctCountry) => {

        const wrongGuesses = getShuffledCountries()
            .filter(country => country.code !== correctCountry.code)
            .slice(0, 3);

        return {
            countryToGuess: correctCountry,
            wrongGuesses: wrongGuesses
        };
    }).slice(0, roundsPerGame);

    return {
        rounds
    };
};

export default { createGame };
