


// console.log(date);

// function getScores() {
//     var today = new Date();
//     let month = today.getMonth() + 1;
//     let monthString;
//     if(month < 10) {
//         monthString = `0${month.toString()}`;
//     }
//     var date = today.getFullYear() + '-' + (monthString) + '-' + today.getDate();
//     console.log(date);
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
//             'X-RapidAPI-Key': '8878829cabmshdd811a9dd7f80bcp151623jsn031673c60a5e'
//         }
//     };

//     fetch(`https://api-nba-v1.p.rapidapi.com/games?date=2022-04-25`, options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

        


// }

async function getScores() {
    var today = new Date();
    let month = today.getMonth() + 1;
    let monthString;
    if(month < 10) {
        monthString = `0${month.toString()}`;
    }
    var date = today.getFullYear() + '-' + (monthString) + '-' + today.getDate();
    console.log(date);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '8878829cabmshdd811a9dd7f80bcp151623jsn031673c60a5e'
        }
    };

    const response = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=2022-04-22`, options);
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

        return response.json();

    
}
// data.response[0].scores.home.points

// console.log(getScores());

let arr = [];

let games = getScores()
            .then((data) => {
                // let arr = []
                for(let i of data.response) {
                    arr.push({
                        homeScore: i.scores.home.points,
                        visitorsScore: i.scores.visitors.points,
                        homeTeam: i.teams.home.name,
                        visitorsTeam: i.teams.visitors.name
                    })
                }
            });

console.log(arr);
/*
The response comes in the form of an array of objects that must be traversed so that the necessary data can be retrieved.

Home Team name
Home Team score

Away Team name
Away Team score

*/



