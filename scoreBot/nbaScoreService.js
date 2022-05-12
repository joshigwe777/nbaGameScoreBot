let today = new Date();
async function getScores(useThis) {
    let month = useThis.getMonth() + 1;
    let monthString;
    let thisDay = useThis.getDay() + 1;
    let thisDayString;


    if (month < 10) {
        monthString = `0${month.toString()}`;
    } else if (month >= 10) {
        monthString = monthString;
    }

    if (thisDay < 10) {
        thisDayString = `0${thisDay.toString()}`;

    } else if (thisDay >= 10) {
        thisDayString = thisDay.toString;
    }

    var date = useThis.getFullYear() + '-' + (monthString) + '-' + (thisDayString);
    console.log(thisDayString);
    console.log(useThis);
    console.log()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '8878829cabmshdd811a9dd7f80bcp151623jsn031673c60a5e'
        }
    };

    const response = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${date}`, options);
    return response.json();


}
// data.response[0].scores.home.points

function getScoreData() {
    let arr = [];
    let finalString = `Scores: \n`;

    let games = getScores(today)
        .then((data) => {
            for (let i of data.response) {
                arr.push({
                    homeScore: i.scores.home.points,
                    visitorsScore: i.scores.visitors.points,
                    homeTeam: i.teams.home.name,
                    visitorsTeam: i.teams.visitors.name
                })
            }
        });

    console.log(arr);
    return finalString;
}
console.log(getScoreData());

// function getScoresFormatted(arr) {
//     let finalString = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].homeScore > 0) {
//             console.log("hello");
//             finalString += `${arr[i].homeTeam}: ${arr[i].homeScore} ${arr[i].visitorsTeam}: ${arr[i].visitingScore} \n`;
//         }

//     }
//     console.log(finalString);
//     // return finalString;
//     return "hello";
// }






