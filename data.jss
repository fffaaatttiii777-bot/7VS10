// Complete Messi vs Ronaldo Dataset
const messiRonaldoData = {
    // All Time Career Stats
    "all-time-career": {
        messi: {
            goals: 874,
            assists: 388,
            appearances: 1115,
            minutesPlayed: 91592,
            goalsPerGame: 0.78,
            minutesPerGoal: 104.8,
            minutesPerGoalContribution: 72.6,
            hatTricks: 59,
            penalties: "110/141",
            freeKicks: 69,
            leftFoot: 733,
            rightFoot: 109,
            headers: 28,
            shots: 3837,
            shotsOnTarget: 1771,
            keyPasses: 1884,
            successfulDribbles: 3845,
            aerialDuels: 159,
            motm: 411,
            avgRating: 8.41
        },
        ronaldo: {
            goals: 938,
            assists: 257,
            appearances: 1281,
            minutesPlayed: 104698,
            goalsPerGame: 0.73,
            minutesPerGoal: 111.6,
            minutesPerGoalContribution: 87.6,
            hatTricks: 66,
            penalties: "175/208",
            freeKicks: 64,
            leftFoot: 179,
            rightFoot: 602,
            headers: 155,
            shots: 4828,
            shotsOnTarget: 1948,
            keyPasses: 1219,
            successfulDribbles: 1887,
            aerialDuels: 1009,
            motm: 218,
            avgRating: 7.77
        }
    },

    // Club Stats
    "all-time-club": {
        messi: {
            goals: 762,
            assists: 330,
            appearances: 922,
            minutesPlayed: 75645,
            goalsPerGame: 0.83,
            minutesPerGoal: 99.3,
            hatTricks: 49,
            penalties: "86/112",
            freeKicks: 58
        },
        ronaldo: {
            goals: 800,
            assists: 220,
            appearances: 1060,
            minutesPlayed: 87070,
            goalsPerGame: 0.75,
            minutesPerGoal: 108.8,
            hatTricks: 56,
            penalties: "154/178",
            freeKicks: 53
        }
    },

    // International Stats
    "all-time-international": {
        messi: {
            goals: 112,
            assists: 58,
            appearances: 193,
            minutesPlayed: 15947,
            goalsPerGame: 0.58,
            minutesPerGoal: 142.4,
            hatTricks: 10,
            penalties: "24/29",
            freeKicks: 11
        },
        ronaldo: {
            goals: 138,
            assists: 37,
            appearances: 221,
            minutesPlayed: 17628,
            goalsPerGame: 0.62,
            minutesPerGoal: 127.7,
            hatTricks: 10,
            penalties: "21/30",
            freeKicks: 11
        }
    },

    // Champions League
    "champions-league": {
        messi: {
            goals: 129,
            assists: 40,
            appearances: 163,
            goalsPerGame: 0.79,
            hatTricks: 8,
            penalties: "18/23",
            freeKicks: 5
        },
        ronaldo: {
            goals: 140,
            assists: 41,
            appearances: 183,
            goalsPerGame: 0.77,
            hatTricks: 8,
            penalties: "19/22",
            freeKicks: 12
        }
    },

    // World Cup
    "world-cup": {
        messi: {
            goals: 13,
            assists: 8,
            appearances: 26,
            goalsPerGame: 0.50,
            hatTricks: 0,
            penalties: "4/6",
            freeKicks: 1
        },
        ronaldo: {
            goals: 8,
            assists: 2,
            appearances: 22,
            goalsPerGame: 0.36,
            hatTricks: 1,
            penalties: "4/5",
            freeKicks: 1
        }
    },

    // 2024 Stats
    "2024": {
        messi: {
            goals: 33,
            assists: 11,
            appearances: 40,
            goalsPerGame: 0.83,
            hatTricks: 0,
            penalties: "1/1",
            freeKicks: 1
        },
        ronaldo: {
            goals: 35,
            assists: 4,
            appearances: 41,
            goalsPerGame: 0.85,
            hatTricks: 3,
            penalties: "5/6",
            freeKicks: 3
        }
    },

    // 2023 Stats
    "2023": {
        messi: {
            goals: 21,
            assists: 20,
            appearances: 41,
            goalsPerGame: 0.51,
            hatTricks: 0,
            penalties: "5/6",
            freeKicks: 1
        },
        ronaldo: {
            goals: 54,
            assists: 16,
            appearances: 59,
            goalsPerGame: 0.92,
            hatTricks: 4,
            penalties: "16/17",
            freeKicks: 1
        }
    },

    // Honours and Trophies
    "trophies": {
        messi: {
            totalTrophies: 46,
            ballon: 8,
            leagueTitles: 12,
            championsLeague: 4,
            worldCup: 1,
            copaAmerica: 2,
            goldenBoot: 6
        },
        ronaldo: {
            totalTrophies: 35,
            ballon: 5,
            leagueTitles: 7,
            championsLeague: 5,
            worldCup: 0,
            euros: 1,
            goldenBoot: 4
        }
    }
};

// Add yearly data for every year from 2002-2025
const yearlyData = {
    2025: { messi: { goals: 24, assists: 7, appearances: 31 }, ronaldo: { goals: 22, assists: 1, appearances: 26 } },
    2024: { messi: { goals: 33, assists: 11, appearances: 40 }, ronaldo: { goals: 35, assists: 4, appearances: 41 } },
    2023: { messi: { goals: 21, assists: 20, appearances: 41 }, ronaldo: { goals: 54, assists: 16, appearances: 59 } },
    2022: { messi: { goals: 23, assists: 26, appearances: 53 }, ronaldo: { goals: 24, assists: 2, appearances: 38 } },
    2021: { messi: { goals: 40, assists: 16, appearances: 51 }, ronaldo: { goals: 47, assists: 6, appearances: 44 } },
    2020: { messi: { goals: 31, assists: 27, appearances: 44 }, ronaldo: { goals: 37, assists: 7, appearances: 46 } },
    2019: { messi: { goals: 54, assists: 25, appearances: 50 }, ronaldo: { goals: 39, assists: 12, appearances: 43 } },
    2018: { messi: { goals: 51, assists: 26, appearances: 54 }, ronaldo: { goals: 49, assists: 13, appearances: 44 } },
    2017: { messi: { goals: 54, assists: 16, appearances: 52 }, ronaldo: { goals: 53, assists: 15, appearances: 46 } },
    2016: { messi: { goals: 59, assists: 29, appearances: 55 }, ronaldo: { goals: 55, assists: 15, appearances: 48 } },
    2015: { messi: { goals: 52, assists: 26, appearances: 57 }, ronaldo: { goals: 61, assists: 21, appearances: 54 } },
    2014: { messi: { goals: 58, assists: 22, appearances: 46 }, ronaldo: { goals: 61, assists: 22, appearances: 47 } },
    2013: { messi: { goals: 45, assists: 15, appearances: 46 }, ronaldo: { goals: 69, assists: 15, appearances: 59 } },
    2012: { messi: { goals: 91, assists: 22, appearances: 69 }, ronaldo: { goals: 63, assists: 11, appearances: 55 } },
    2011: { messi: { goals: 59, assists: 29, appearances: 55 }, ronaldo: { goals: 60, assists: 16, appearances: 54 } },
    2010: { messi: { goals: 60, assists: 17, appearances: 53 }, ronaldo: { goals: 53, assists: 13, appearances: 54 } },
    2009: { messi: { goals: 47, assists: 11, appearances: 51 }, ronaldo: { goals: 33, assists: 6, appearances: 35 } },
    2008: { messi: { goals: 16, assists: 15, appearances: 40 }, ronaldo: { goals: 42, assists: 8, appearances: 49 } },
    2007: { messi: { goals: 17, assists: 3, appearances: 36 }, ronaldo: { goals: 42, assists: 17, appearances: 49 } },
    2006: { messi: { goals: 8, assists: 1, appearances: 25 }, ronaldo: { goals: 20, assists: 7, appearances: 47 } },
    2005: { messi: { goals: 1, assists: 0, appearances: 9 }, ronaldo: { goals: 9, assists: 5, appearances: 50 } },
    2004: { messi: { goals: 0, assists: 0, appearances: 1 }, ronaldo: { goals: 8, assists: 6, appearances: 40 } },
    2003: { messi: { goals: 0, assists: 0, appearances: 0 }, ronaldo: { goals: 5, assists: 4, appearances: 31 } },
    2002: { messi: { goals: 0, assists: 0, appearances: 0 }, ronaldo: { goals: 9, assists: 1, appearances: 31 } }
};

// Merge yearly data into main dataset
Object.keys(yearlyData).forEach(year => {
    messiRonaldoData[year] = yearlyData[year];
});
