function gameObject(){
    let game = {
        home:{
            teamName:"Brooklyn Nets",
            colors: "Black, White",
            players:{
                "Alan Anderson":{
                    "Number": 0,
                    "shoe":10,
                    "points":22,
                    "rebounds":12,
                    "Assists":12,
                    "steals":3,
                    "blocks":1,
                    "slam Dunks":1
                },
                "Reggie Evans":{
                    "Number": 30,
                    "shoe":10,
                    "points":22,
                    "rebounds":12,
                    "Assists":12,
                    "steals":3,
                    "blocks":1,
                    "slam Dunks":1
                },
                "Brook Lopez":{
                    "Number": 11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "Assists":10,
                    "steals":3,
                    "blocks":1,
                    "slam Dunks":15
                },
                "Mason Plumlee":{
                    "Number": 0,
                    "shoe":10,
                    "points":22,
                    "rebounds":12,
                    "Assists":12,
                    "steals":3,
                    "blocks":8,
                    "slam Dunks":5
                }
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors: "Turquoise, Purple",
            players:{
                "Jeff Adrien":{
                    "Number": 0,
                    "shoe":10,
                    "points":22,
                    "rebounds":12,
                    "Assists":12,
                    "steals":3,
                    "blocks":1,
                    "slam Dunks":1
                },
                "Bismak Biyombo":{
                    "Number": 30,
                    "shoe":10,
                    "points":22,
                    "rebounds":12,
                    "Assists":12,
                    "steals":3,
                    "blocks":1,
                    "slam Dunks":1
                },
                "DeSagna Diop":{
                    "Number": 11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "Assists":10,
                    "steals":3,
                    "blocks":1,
                    "slam Dunks":15
                },
                "Ben Gordon":{
                    "Number": 0,
                    "shoe":10,
                    "points":22,
                    "rebounds":12,
                    "Assists":12,
                    "steals":3,
                    "blocks":8,
                    "slam Dunks":5
                }
            }
        }
    }
    return game
}
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']

  }
  
  function numPointsScored(playerName){
        let game = gameObject()
        for (let gameKey in game){
            const teamObj = game[gameKey]
            const playerObj = teamObj.players
            for (const playerKey in playerObj) {
                if (playerKey === playerName) {
                    return playerObj[playerKey].points
                    
                }
            }
        }
  }

  function shoeSize(pName){
    let game = gameObject()
    for (let gameKey in game){
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerKey === pName) {
                return playerObj[playerKey].shoe
                
            }
        }
    }
}
  console.log(shoeSize("Jeff Adrien"))

