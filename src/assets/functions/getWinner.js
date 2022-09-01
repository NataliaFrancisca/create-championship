export const getWinner = (results) => {
    const dataTeams = JSON.parse(localStorage.getItem("teamNumber"));

    results.forEach(match => {
        dataTeams.map(team => {
            if(team.nameTeam == match.winner){
                team.wins = team.wins + 1;
            }
            return team;
        })
    })

    return dataTeams.sort((a,b) => a.wins - b.wins).reverse();
}
