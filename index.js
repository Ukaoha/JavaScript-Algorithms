//write a function that returns the number of matches played in a football tournament where there i 8 groups,in each of these groups 
// we have 4 teams,each team play each other and 2 emerges from the team ,it has 5 stages till a winner emerge




// function numofGames(groups,team)
// A team plays each team 1
// let groupteam(team-1)* team no of group for each group 
// groupgame * groups === total games in all group
// game = 0 
// let count = team
// for(let i =1; i < team-1;i++){
    // count --
// }
//   let total group games =groups* gamee





function getNumofmatches(group , team) {
    let totalNumOfGames ; 
    let count = team ;
    let games = 0 ;
    for(let i = 1 ; i < team; i++) {
        games += count -1;
        count-- ;
    }
    console.log(games)
    let groupGames = group * games;
    let knockoutStage = group * 2 ;
    let knockoutGames = 0 ;
    do{
        knockoutGames += (knockoutStage / 2);
        knockoutStage /= 2;
    } while(knockoutStage > 1) ;

    totalNumOfGames = groupGames + knockoutGames;

    return totalNumOfGames;
}

getNumofmatches(8 , 4) ;

// Another Algorithm
function getNumOfMathches() {
let group = 8 ;
let teams = 4 ;
let totalteaams = group * teams ;
let sumOfteamMatch = (teams*(4-1)/2)  //using this formular (n(a-1) /2)

console.log(sumOfteamMatch) ;

let totalNumberofTeams = totalteaams / 2 ;
let knockoutStage = (16*(1-0.5**5)/(1-0.5)/2) // using the Gp formular = a(1-r**n)/1-r)
let totalGroupGames =  sumOfteamMatch * group;
let totalMatches = totalGroupGames + knockoutStage

}


