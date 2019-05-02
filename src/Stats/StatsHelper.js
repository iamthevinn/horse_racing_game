function frequencyOfNumber(arrayOfNumbers, num) {
  return arrayOfNumbers.filter(number => number === num).length;
}

export function getWinnersByFrequency(history) {
  const winners = history ? history.map(race => race.winner) : [];
  return [
    { winner: "2", frequency: frequencyOfNumber(winners, 2) },
    { winner: "3", frequency: frequencyOfNumber(winners, 3) },
    { winner: "4", frequency: frequencyOfNumber(winners, 4) },
    { winner: "5", frequency: frequencyOfNumber(winners, 5) },
    { winner: "6", frequency: frequencyOfNumber(winners, 6) },
    { winner: "7", frequency: frequencyOfNumber(winners, 7) },
    { winner: "8", frequency: frequencyOfNumber(winners, 8) },
    { winner: "9", frequency: frequencyOfNumber(winners, 9) },
    { winner: "10", frequency: frequencyOfNumber(winners, 10) },
    { winner: "11", frequency: frequencyOfNumber(winners, 11) },
    { winner: "12", frequency: frequencyOfNumber(winners, 12) }
  ]
}

export function getDiceRollsByFrequency(history) {
  const diceRolls = history ? history.map(race => {
    const forwardRolls = race.forwardNumbers || [];
    const scratchedRolls = race.scratchedNumbers || [];
    return [...forwardRolls, ...scratchedRolls];
  }).flat() : [];
  return [
    { diceTotal: "2", frequency: frequencyOfNumber(diceRolls, 2) },
    { diceTotal: "3", frequency: frequencyOfNumber(diceRolls, 3) },
    { diceTotal: "4", frequency: frequencyOfNumber(diceRolls, 4) },
    { diceTotal: "5", frequency: frequencyOfNumber(diceRolls, 5) },
    { diceTotal: "6", frequency: frequencyOfNumber(diceRolls, 6) },
    { diceTotal: "7", frequency: frequencyOfNumber(diceRolls, 7) },
    { diceTotal: "8", frequency: frequencyOfNumber(diceRolls, 8) },
    { diceTotal: "9", frequency: frequencyOfNumber(diceRolls, 9) },
    { diceTotal: "10", frequency: frequencyOfNumber(diceRolls, 10) },
    { diceTotal: "11", frequency: frequencyOfNumber(diceRolls, 11) },
    { diceTotal: "12", frequency: frequencyOfNumber(diceRolls, 12) }
  ];
}

export function getMoneyPaidByRace(history) {
  return history ? history.map((race, raceIndex) => {
    return { raceNumber: (raceIndex + 1).toString(), amount: race.paidAmount };
  }) : [];
}

export function getScratchedRollsByFrequency(history) {
  const allScratchedNumbers = history ? history.map(race => {
    const scratchedNumbersForThisRace = race.scratchedNumbers || [];
    return [...new Set(scratchedNumbersForThisRace)]
  }).flat() : [];
  return [
    { diceTotal: "2", frequency: frequencyOfNumber(allScratchedNumbers, 2) },
    { diceTotal: "3", frequency: frequencyOfNumber(allScratchedNumbers, 3) },
    { diceTotal: "4", frequency: frequencyOfNumber(allScratchedNumbers, 4) },
    { diceTotal: "5", frequency: frequencyOfNumber(allScratchedNumbers, 5) },
    { diceTotal: "6", frequency: frequencyOfNumber(allScratchedNumbers, 6) },
    { diceTotal: "7", frequency: frequencyOfNumber(allScratchedNumbers, 7) },
    { diceTotal: "8", frequency: frequencyOfNumber(allScratchedNumbers, 8) },
    { diceTotal: "9", frequency: frequencyOfNumber(allScratchedNumbers, 9) },
    { diceTotal: "10", frequency: frequencyOfNumber(allScratchedNumbers, 10) },
    { diceTotal: "11", frequency: frequencyOfNumber(allScratchedNumbers, 11) },
    { diceTotal: "12", frequency: frequencyOfNumber(allScratchedNumbers, 12) }
  ];
}
