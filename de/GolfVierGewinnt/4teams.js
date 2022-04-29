    // let team1 = "red";
    // let team2 = "blue"
    let teams = 0;
    let feld1 = null;
    let feld2 = null;
    let feld3 = null;
    let feld4 = null;
    let feld5 = null;
    let feld6 = null;
    let feld7 = null;
    let feld8 = null;
    let feld9 = null;
    let feld10 = null;
    let feld11 = null;
    let feld12 = null;
    let feld13 = null;
    let feld14 = null;
    let feld15 = null;
    let feld16 = null;
    let feld17 = null;
    let feld18 = null;
    let feld19 = null;
    let feld20 = null;
    let feld21 = null;
    let feld22 = null;
    let feld23 = null;
    let feld24 = null;
    let feld25 = null;
    let feld26 = null;
    let feld27 = null;
    let feld28 = null;
    let feld29 = null;
    let feld30 = null;
    let feld31 = null;
    let feld32 = null;
    let feld33 = null;
    let feld34 = null;
    let feld35 = null;
    let feld36 = null;
    let feld37 = null;
    let feld38 = null;
    let feld39 = null;
    let feld40 = null;
    let feld41 = null;
    let feld42 = null;
    let feld43 = null;
    let feld44 = null;
    let feld45 = null;
    let feld46 = null;
    let feld47 = null;
    let feld48 = null;
    let feld49 = null;
    let feld50 = null;
    let feld51 = null;
    let feld52 = null;
    let feld53 = null;
    let feld54 = null;
    let feld55 = null;
    let feld56 = null;
    let team0 =  "blue"; //blaues Team
    let team1 = "red"; //rotes Team
    let team2 = "yellow";
    let team3 = "green";

function field(fieldnb) { //fieldnb = Nummer des Feldes

    let field = fieldnb;

    if ( field == 1) {
        if ( teams == 0) {
            document.getElementById("1").style.backgroundColor = "blue";
            feld1 = team0;
        } else if ( teams == 1) {
            document.getElementById("1").style.backgroundColor = "red";
            feld1 = team1;
        } else if ( teams == 2) {
            document.getElementById("1").style.backgroundColor = "yellow";
            feld1 = team2;
        } else if ( teams == 3) {
            document.getElementById("1").style.backgroundColor = "gren";
            feld1 = team3;
        }
    } else if ( field == 2) {
        if ( teams == 0) {
            document.getElementById("2").style.backgroundColor = "blue";
            feld2 = team0;
        } else if ( teams == 1) {
            document.getElementById("2").style.backgroundColor = "red";
            feld2 = team1;
        }
    } else if ( field == 3) {
        if ( teams == 0) {
            document.getElementById("3").style.backgroundColor = "blue";
            feld3 = team0
        } else if ( teams == 1) {
            document.getElementById("3").style.backgroundColor = "red";
            feld3 = team1;
        }
    } else if ( field == 4) {
        if ( teams == 0) {
            document.getElementById("4").style.backgroundColor = "blue";
            teams + 1;
            feld4 = team0
        } else if ( teams == 1) {
            document.getElementById("4").style.backgroundColor = "red";
            teams - 1;
            feld4 = team1;
        }
    } else if ( field == 5) {
        if ( teams == 0) {
            document.getElementById("5").style.backgroundColor = "blue";
            teams + 1;
            feld5 = team0
        } else if ( teams == 1) {
            document.getElementById("5").style.backgroundColor = "red";
            teams - 1;
            feld5 = team1
        }
    } else if ( field == 6) {
        if ( teams == 0) {
            document.getElementById("6").style.backgroundColor = "blue";
            teams + 1;
            feld6 = team0
        } else if ( teams == 1) {
            document.getElementById("6").style.backgroundColor = "red";
            teams - 1;
            feld6 = team1
        }
    } else if ( field == 7) {
        if ( teams == 0) {
            document.getElementById("7").style.backgroundColor = "blue";
            teams + 1;
            feld7 = team0
        } else if ( teams == 1) {
            document.getElementById("7").style.backgroundColor = "red";
            teams - 1;
            feld7 = team1
        }
    } else if ( field == 8) {
        if ( teams == 0) {
            document.getElementById("8").style.backgroundColor = "blue";
            teams + 1;
            feld8 = team0
        } else if ( teams == 1) {
            document.getElementById("8").style.backgroundColor = "red";
            teams - 1;
            feld8 = team1
        }
    } else if ( field == 9) {
        if ( teams == 0) {
            document.getElementById("9").style.backgroundColor = "blue";
            teams + 1;
            feld9 = team0
        } else if ( teams == 1) {
            document.getElementById("9").style.backgroundColor = "red";
            teams - 1;
            feld9 = team1
        }
    } else if ( field == 10) {
        if ( teams == 0) {
            document.getElementById("10").style.backgroundColor = "blue";
            teams + 1;
            feld10 = team0
        } else if ( teams == 1) {
            document.getElementById("10").style.backgroundColor = "red";
            teams - 1;
            feld10 = team1;
        }
    } else if ( field == 11) {
        if ( teams == 0) {
            document.getElementById("11").style.backgroundColor = "blue";
            teams + 1;
            feld11 = team0;
        } else if ( teams == 1) {
            document.getElementById("11").style.backgroundColor = "red";
            teams - 1;
            feld11 = team1;
        }
    } else if ( field == 12) {
        if ( teams == 0) {
            document.getElementById("12").style.backgroundColor = "blue";
            teams + 1;
            feld12 = team0
        } else if ( teams == 1) {
            document.getElementById("12").style.backgroundColor = "red";
            teams - 1;
            fedl12 = team1;
        }
    } else if ( field == 13) {
        if ( teams == 0) {
            document.getElementById("13").style.backgroundColor = "blue";
            teams + 1;
            feld13 = team0
        } else if ( teams == 1) {
            document.getElementById("13").style.backgroundColor = "red";
            teams - 1;
            feld13 = team1;
        }
    } else if ( field == 14) {
        if ( teams == 0) {
            document.getElementById("14").style.backgroundColor = "blue";
            teams + 1;
            feld14 = team0
        } else if ( teams == 1) {
            document.getElementById("14").style.backgroundColor = "red";
            teams - 1;
            feld14 = team1;
        }
    } else if ( field == 15) {
        if ( teams == 0) {
            document.getElementById("15").style.backgroundColor = "blue";
            teams + 1;
            feld15 = team0
        } else if ( teams == 1) {
            document.getElementById("15").style.backgroundColor = "red";
            teams - 1;
            feld15 = team1;
        }
    } else if ( field == 16) {
        if ( teams == 0) {
            document.getElementById("16").style.backgroundColor = "blue";
            teams + 1;
            feld16 = team0
        } else if ( teams == 1) {
            document.getElementById("16").style.backgroundColor = "red";
            teams - 1;
            feld16 = team1;
        }
    } else if ( field == 17) {
        if ( teams == 0) {
            document.getElementById("17").style.backgroundColor = "blue";
            teams + 1;
            feld17 = team0
        } else if ( teams == 1) {
            document.getElementById("17").style.backgroundColor = "red";
            teams - 1;
            feld17 = team1;
        }
    } else if ( field == 18) {
        if ( teams == 0) {
            document.getElementById("18").style.backgroundColor = "blue";
            teams + 1;
            feld18 = team0
        } else if ( teams == 1) {
            document.getElementById("18").style.backgroundColor = "red";
            teams - 1;
            feld18 = team1;
        }
    } else if ( field == 19) {
        if ( teams == 0) {
            document.getElementById("19").style.backgroundColor = "blue";
            teams + 1;
            feld19 = team0
        } else if ( teams == 1) {
            document.getElementById("19").style.backgroundColor = "red";
            teams - 1;
            feld19 = team1;
        }
    } else if ( field == 20) {
        if ( teams == 0) {
            document.getElementById("20").style.backgroundColor = "blue";
            teams + 1;
            feld20 = team0
        } else if ( teams == 1) {
            document.getElementById("20").style.backgroundColor = "red";
            teams - 1;
            feld20 = team1;
        }
    } else if ( field == 21) {
        if ( teams == 0) {
            document.getElementById("21").style.backgroundColor = "blue";
            teams + 1;
            feld21 = team0
        } else if ( teams == 1) {
            document.getElementById("21").style.backgroundColor = "red";
            teams - 1;
            feld21 = team1;
        }
    } else if ( field == 22) {
        if ( teams == 0) {
            document.getElementById("22").style.backgroundColor = "blue";
            teams + 1;
            feld22 = team0
        } else if ( teams == 1) {
            document.getElementById("22").style.backgroundColor = "red";
            teams - 1;
            feld22 = team1;
        }
    } else if ( field == 23) {
        if ( teams == 0) {
            document.getElementById("23").style.backgroundColor = "blue";
            teams + 1;
            feld23 = team0
        } else if ( teams == 1) {
            document.getElementById("23").style.backgroundColor = "red";
            teams - 1;
            feld23 = team1;
        }
    } else if ( field == 24) {
        if ( teams == 0) {
            document.getElementById("24").style.backgroundColor = "blue";
            teams + 1;
            feld24 = team0
        } else if ( teams == 1) {
            document.getElementById("24").style.backgroundColor = "red";
            teams - 1;
            feld24 = team1
        }
    } else if ( field == 25) {
        if ( teams == 0) {
            document.getElementById("25").style.backgroundColor = "blue";
            teams + 1;
            feld25 = team0
        } else if ( teams == 1) {
            document.getElementById("25").style.backgroundColor = "red";
            teams - 1;
            feld25 = team1;
        }
    } else if ( field == 26) {
        if ( teams == 0) {
            document.getElementById("26").style.backgroundColor = "blue";
            teams + 1;
            feld26 = team0
        } else if ( teams == 1) {
            document.getElementById("26").style.backgroundColor = "red";
            teams - 1;
            feld26 = team1;
        }
    } else if ( field == 27) {
        if ( teams == 0) {
            document.getElementById("27").style.backgroundColor = "blue";
            teams + 1;
            feld27 = team0
        } else if ( teams == 1) {
            document.getElementById("27").style.backgroundColor = "red";
            teams - 1;
            feld27 = team1;
        }
    } else if ( field == 28) {
        if ( teams == 0) {
            document.getElementById("28").style.backgroundColor = "blue";
            teams + 1;
            feld28 = team0
        } else if ( teams == 1) {
            document.getElementById("28").style.backgroundColor = "red";
            teams - 1;
            feld28 = team1;
        }
    } else if ( field == 29) {
        if ( teams == 0) {
            document.getElementById("29").style.backgroundColor = "blue";
            teams + 1;
            feld29 = team0
        } else if ( teams == 1) {
            document.getElementById("29").style.backgroundColor = "red";
            teams - 1;
            feld29 = team1;
        }
    } else if ( field == 30) {
        if ( teams == 0) {
            document.getElementById("30").style.backgroundColor = "blue";
            teams + 1;
            feld30 = team0
        } else if ( teams == 1) {
            document.getElementById("30").style.backgroundColor = "red";
            teams - 1;
            feld30 = team1;
        }
    } else if ( field == 31) {
        if ( teams == 0) {
            document.getElementById("31").style.backgroundColor = "blue";
            teams + 1;
            feld31 = team0
        } else if ( teams == 1) {
            document.getElementById("31").style.backgroundColor = "red";
            teams - 1;
            feld31 = team1;
        }
    } else if ( field == 32) {
        if ( teams == 0) {
            document.getElementById("32").style.backgroundColor = "blue";
            teams + 1;
            feld32 = team0
        } else if ( teams == 1) {
            document.getElementById("32").style.backgroundColor = "red";
            teams - 1;
            feld32 = team1;
        }
    } else if ( field == 33) {
        if ( teams == 0) {
            document.getElementById("33").style.backgroundColor = "blue";
            teams + 1;
            feld33 = team0
        } else if ( teams == 1) {
            document.getElementById("33").style.backgroundColor = "red";
            teams - 1;
            feld33 = team1;
        }
    } else if ( field == 34) {
        if ( teams == 0) {
            document.getElementById("34").style.backgroundColor = "blue";
            teams + 1;
            feld34 = team0
        } else if ( teams == 1) {
            document.getElementById("34").style.backgroundColor = "red";
            teams - 1;
            feld34 = team1;
        }
    } else if ( field == 35) {
        if ( teams == 0) {
            document.getElementById("35").style.backgroundColor = "blue";
            teams + 1;
            feld35 = team0
        } else if ( teams == 1) {
            document.getElementById("35").style.backgroundColor = "red";
            teams - 1;
            feld35 = team1;
        }
    } else if ( field == 36) {
        if ( teams == 0) {
            document.getElementById("36").style.backgroundColor = "blue";
            teams + 1;
            feld36 = team0
        } else if ( teams == 1) {
            document.getElementById("36").style.backgroundColor = "red";
            teams - 1;
            feld36 = team1;
        }
    } else if ( field == 37) {
        if ( teams == 0) {
            document.getElementById("37").style.backgroundColor = "blue";
            teams + 1;
            feld37 = team0
        } else if ( teams == 1) {
            document.getElementById("37").style.backgroundColor = "red";
            teams - 1;
            feld37 = team1;
        }
    } else if ( field == 38) {
        if ( teams == 0) {
            document.getElementById("38").style.backgroundColor = "blue";
            teams + 1;
            feld38 = team0
        } else if ( teams == 1) {
            document.getElementById("38").style.backgroundColor = "red";
            teams - 1;
            feld38 = team1;
        }
    } else if ( field == 39) {
        if ( teams == 0) {
            document.getElementById("39").style.backgroundColor = "blue";
            teams + 1;
            feld39 = team0
        } else if ( teams == 1) {
            document.getElementById("39").style.backgroundColor = "red";
            teams - 1;
            feld39 = team1;
        }
    } else if ( field == 40) {
        if ( teams == 0) {
            document.getElementById("40").style.backgroundColor = "blue";
            teams + 1;
            feld40 = team0
        } else if ( teams == 1) {
            document.getElementById("40").style.backgroundColor = "red";
            teams - 1;
            feld40 = team1;
        }
    } else if ( field == 41) {
        if ( teams == 0) {
            document.getElementById("41").style.backgroundColor = "blue";
            teams + 1;
            feld41 = team0
        } else if ( teams == 1) {
            document.getElementById("41").style.backgroundColor = "red";
            teams - 1;
            feld41 = team1;
        }
    } else if ( field == 42) {
        if ( teams == 0) {
            document.getElementById("42").style.backgroundColor = "blue";
            teams + 1;
            feld42 = team0
        } else if ( teams == 1) {
            document.getElementById("42").style.backgroundColor = "red";
            teams - 1;
            feld42 = team1;
        }
    } else if ( field == 43) {
        if ( teams == 0) {
            document.getElementById("43").style.backgroundColor = "blue";
            teams + 1;
            feld43 = team0
        } else if ( teams == 1) {
            document.getElementById("43").style.backgroundColor = "red";
            teams - 1;
            feld43 = team1;
        }
    } else if ( field == 44) {
        if ( teams == 0) {
            document.getElementById("44").style.backgroundColor = "blue";
            teams + 1;
            feld44 = team0
        } else if ( teams == 1) {
            document.getElementById("44").style.backgroundColor = "red";
            teams - 1;
            feld44 = team1;
        }
    } else if ( field == 45) {
        if ( teams == 0) {
            document.getElementById("45").style.backgroundColor = "blue";
            teams + 1;
            feld45 = team0
        } else if ( teams == 1) {
            document.getElementById("45").style.backgroundColor = "red";
            teams - 1;
            feld45 = team1;
        }
    } else if ( field == 46) {
        if ( teams == 0) {
            document.getElementById("46").style.backgroundColor = "blue";
            teams + 1;
            feld46 = team0
        } else if ( teams == 1) {
            document.getElementById("46").style.backgroundColor = "red";
            teams - 1;
            feld46 = team1;
        }
    } else if ( field == 47) {
        if ( teams == 0) {
            document.getElementById("47").style.backgroundColor = "blue";
            teams + 1;
            feld47 = team0
        } else if ( teams == 1) {
            document.getElementById("47").style.backgroundColor = "red";
            teams - 1;
            feld47 = team1;
        }
    } else if ( field == 48) {
        if ( teams == 0) {
            document.getElementById("48").style.backgroundColor = "blue";
            teams + 1;
            feld48 = team0
        } else if ( teams == 1) {
            document.getElementById("48").style.backgroundColor = "red";
            teams - 1;
            feld48 = team1;
        }
    } else if ( field == 49) {
        if ( teams == 0) {
            document.getElementById("49").style.backgroundColor = "blue";
            teams + 1;
            feld49 = team0
        } else if ( teams == 1) {
            document.getElementById("49").style.backgroundColor = "red";
            teams - 1;
            feld49 = team1;
        }
    } else if ( field == 50) {
        if ( teams == 0) {
            document.getElementById("50").style.backgroundColor = "blue";
            teams + 1;
            feld50 = team0
        } else if ( teams == 1) {
            document.getElementById("50").style.backgroundColor = "red";
            teams - 1;
            feld50 = team1;
        }
    } else if ( field == 51) {
        if ( teams == 0) {
            document.getElementById("51").style.backgroundColor = "blue";
            teams + 1;
            feld51 = team0
        } else if ( teams == 1) {
            document.getElementById("51").style.backgroundColor = "red";
            teams - 1;
            feld51 = team1;
        }
    } else if ( field == 52) {
        if ( teams == 0) {
            document.getElementById("52").style.backgroundColor = "blue";
            teams + 1;
            feld52 = team0
        } else if ( teams == 1) {
            document.getElementById("52").style.backgroundColor = "red";
            teams - 1;
            feld52 = team1;
        }
    } else if ( field == 53) {
        if ( teams == 0) {
            document.getElementById("53").style.backgroundColor = "blue";
            teams + 1;
            feld53 = team0
        } else if ( teams == 1) {
            document.getElementById("53").style.backgroundColor = "red";
            teams - 1;
            feld53 = team1;
        }
    } else if ( field == 54) {
        if ( teams == 0) {
            document.getElementById("54").style.backgroundColor = "blue";
            teams + 1;
            feld54 = team0
        } else if ( teams == 1) {
            document.getElementById("54").style.backgroundColor = "red";
            teams - 1;
            feld54 = team1;
        }
    } else if ( field == 55) {
        if ( teams == 0) {
            document.getElementById("55").style.backgroundColor = "blue";
            teams + 1;
            feld55 = team0
        } else if ( teams == 1) {
            document.getElementById("55").style.backgroundColor = "red";
            teams - 1;
            feld55 = team1;
        }
    } else if ( field == 56) {
        if ( teams == 0) {
            document.getElementById("56").style.backgroundColor = "blue";
            teams + 1;
            feld56 = team0
        } else if ( teams == 1) {
            document.getElementById("56").style.backgroundColor = "red";
            teams - 1;
            feld56 = team1;
        }
    } 
    TestWinBlue();
    TestWinRed();
    changeTeam();
}

function TestWinBlue() {
    if (
        // 1. Reihe
        feld1 == team0 && feld2 == team0 && feld3 == team0 && feld4 == team0 ||
        feld2 == team0 && feld3 == team0 && feld4 == team0 && feld5 == team0 ||
        feld3 == team0 && feld4 == team0 && feld5 == team0 && feld6 == team0 ||
        feld4 == team0 && feld5 == team0 && feld6 == team0 && feld7 == team0 ||
        // 2. Reihe
        feld8 == team0 && feld9 == team0 && feld10 == team0 && feld11 == team0 ||
        feld9 == team0 && feld10 == team0 && feld11 == team0 && feld12 == team0 ||
        feld10 == team0 && feld11 == team0 && feld12 == team0 && feld13 == team0 ||
        feld11 == team0 && feld12 == team0 && feld13 == team0 && feld14 == team0 ||
        //3. Reihe
        feld15 == team0 && feld16 == team0 && feld17 == team0 && feld18 == team0 ||
        feld16 == team0 && feld17 == team0 && feld18 == team0 && feld19 == team0 ||
        feld17 == team0 && feld18 == team0 && feld19 == team0 && feld20 == team0 ||
        feld18 == team0 && feld19 == team0 && feld20 == team0 && feld21 == team0 ||
        //4.Reihe
        feld22 == team0 && feld23 == team0 && feld24 == team0 && feld25 == team0 ||
        feld23 == team0 && feld24 == team0 && feld25 == team0 && feld26 == team0 ||
        feld24 == team0 && feld25 == team0 && feld26 == team0 && feld27 == team0 ||
        feld25 == team0 && feld26 == team0 && feld27 == team0 && feld28 == team0 ||
        //5. Reihe
        feld29 == team0 && feld30 == team0 && feld31 == team0 && feld32 == team0 ||
        feld30 == team0 && feld31 == team0 && feld32 == team0 && feld33 == team0 ||
        feld31 == team0 && feld32 == team0 && feld33 == team0 && feld34 == team0 ||
        feld32 == team0 && feld33 == team0 && feld34 == team0 && feld35 == team0 ||
        //6. Reihe
        feld36 == team0 && feld37 == team0 && feld38 == team0 && feld39 == team0 ||
        feld37 == team0 && feld38 == team0 && feld39 == team0 && feld40 == team0 ||
        feld38 == team0 && feld39 == team0 && feld40 == team0 && feld41 == team0 ||
        feld39 == team0 && fedl40 == team0 && feld41 == team0 && feld42 == team0 ||
        // 7. Reihe
        feld43 == team0 && feld44 == team0 && feld45 == team0 && feld46 == team0 ||
        feld44 == team0 && feld45 == team0 && feld46 == team0 && feld47 == team0 ||
        feld45 == team0 && feld46 == team0 && feld47 == team0 && feld48 == team0 ||
        feld46 == team0 && feld47 == team0 && feld48 == team0 && feld48 == team0 ||
        //8. Reihe
        feld49 == team0 && feld50 == team0 && feld51 == team0 && feld52 == team0 ||
        feld50 == team0 && feld51 == team0 && feld52 == team0 && feld53 == team0 ||
        feld51 == team0 && feld52 == team0 && feld53 == team0 && feld54 == team0 ||
        feld52 == team0 && feld53 == team0 && feld54 == team0 && feld55 == team0 ||
        feld53 == team0 && feld54 == team0 && feld55 == team0 && feld56 == team0 ||
        //1. Spalte
        feld1 == team0 && feld8 == team0 && feld15 == team0 && feld22 == team0 ||
        feld8 == team0 && feld15 == team0 && feld22 == team0 && feld29 == team0 ||
        feld15 == team0 && feld22 == team0 && feld29 == team0 && feld36 == team0 ||
        feld22 == team0 && feld29 == team0 && feld36 == team0 && feld43 == team0 ||
        feld29 == team0 && feld36 == team0 && feld43 == team0 && feld50 == team0 ||
        //2. Spalte
        feld2 == team0 && feld9 == team0 && feld16 == team0 && feld23 == team0 ||
        feld9 == team0 && feld16 == team0 && feld23 == team0 && feld30 == team0 ||
        feld16 == team0 && feld23 == team0 && feld30 == team0 && feld37 == team0 ||
        feld23 == team0 && feld30 == team0 && feld37 == team0 && feld44 == team0 ||
        feld30 == team0 && feld37 == team0 && feld44 == team0 && feld51 == team0 ||
        //3. Spalte
        feld3 == team0 && feld10 == team0 && feld17 == team0 && feld24 == team0 ||
        feld10 == team0 && feld17 == team0 && feld24 == team0 && feld31 == team0 ||
        feld17 == team0 && feld24 == team0 && feld31 == team0 && feld38 == team0 ||
        feld24 == team0 && feld31 == team0 && feld38 == team0 && feld45 == team0 ||
        feld31 == team0 && feld38 == team0 && feld45 == team0 && feld52 == team0 ||
        //4. Spalte
        feld4 == team0 && feld11 == team0 && feld18 == team0 && feld25 == team0 ||
        feld11 == team0 && feld18 == team0 && feld25 == team0 && feld32 == team0 ||
        feld18 == team0 && feld25 == team0 && feld32 == team0 && feld39 == team0 ||
        feld25 == team0 && feld32 == team0 && feld39 == team0 && feld46 == team0 ||
        feld32 == team0 && feld39 == team0 && feld46 == team0 && feld53 == team0 ||
        //5. Spalte
        feld5 == team0 && feld12 == team0 && feld19 == team0 && feld26 == team0 ||
        feld12 == team0 && feld19 == team0 && feld26 == team0 && feld33 == team0 ||
        feld19 == team0 && feld26 == team0 && feld33 == team0 && feld40 == team0 ||
        feld26 == team0 && feld33 == team0 && feld40 == team0 && feld47 == team0 ||
        feld33 == team0 && feld40 == team0 && feld47 == team0 && feld54 == team0 ||
        //6. Spalte
        feld6 == team0 && feld13 == team0 && feld20 == team0 && feld27 == team0 ||
        feld13 == team0 && feld20 == team0 && feld27 == team0 && feld34 == team0 ||
        feld20 == team0 && feld27 == team0 && feld34 == team0 && feld41 == team0 ||
        feld27 == team0 && feld34 == team0 && feld41 == team0 && feld48 == team0 ||
        feld34 == team0 && feld41 == team0 && feld48 == team0 && feld55 == team0 ||
        //7. Spalte
        feld7 == team0 && feld14 == team0 && feld21 == team0 && feld28 == team0 ||
        feld14 == team0 && feld21 == team0 && feld28 == team0 && feld35 == team0 ||
        feld21 == team0 && feld28 == team0 && feld35 == team0 && feld42 == team0 ||
        feld28 == team0 && feld35 == team0 && feld42 == team0 && feld49 == team0 ||
        feld35 == team0 && feld42 == team0 && feld49 == team0 && feld56 == team0 
        ) {
        alert("Das blaue Team hat gewonnen!")
    }
}

function TestWinRed() {
    if (
        // 1. Reihe
        feld1 == team1 && feld2 == team1 && feld3 == team1 && feld4 == team1 ||
        feld2 == team1 && feld3 == team1 && feld4 == team1 && feld5 == team1 ||
        feld3 == team1 && feld4 == team1 && feld5 == team1 && feld6 == team1 ||
        feld4 == team1 && feld5 == team1 && feld6 == team1 && feld7 == team1 ||
        // 2. Reihe
        feld8 == team1 && feld9 == team1 && feld10 == team1 && feld11 == team1 ||
        feld9 == team1 && feld10 == team1 && feld11 == team1 && feld12 == team1 ||
        feld10 == team1 && feld11 == team1 && feld12 == team1 && feld13 == team1 ||
        feld11 == team1 && feld12 == team1 && feld13 == team1 && feld14 == team1 ||
        //3. Reihe
        feld15 == team1 && feld16 == team1 && feld17 == team1 && feld18 == team1 ||
        feld16 == team1 && feld17 == team1 && feld18 == team1 && feld19 == team1 ||
        feld17 == team1 && feld18 == team1 && feld19 == team1 && feld20 == team1 ||
        feld18 == team1 && feld19 == team1 && feld20 == team1 && feld21 == team1 ||
        //4.Reihe
        feld22 == team1 && feld23 == team1 && feld24 == team1 && feld25 == team1 ||
        feld23 == team1 && feld24 == team1 && feld25 == team1 && feld26 == team1 ||
        feld24 == team1 && feld25 == team1 && feld26 == team1 && feld27 == team1 ||
        feld25 == team1 && feld26 == team1 && feld27 == team1 && feld28 == team1 ||
        //5. Reihe
        feld29 == team1 && feld30 == team1 && feld31 == team1 && feld32 == team1 ||
        feld30 == team1 && feld31 == team1 && feld32 == team1 && feld33 == team1 ||
        feld31 == team1 && feld32 == team1 && feld33 == team1 && feld34 == team1 ||
        feld32 == team1 && feld33 == team1 && feld34 == team1 && feld35 == team1 ||
        //6. Reihe
        feld36 == team1 && feld37 == team1 && feld38 == team1 && feld39 == team1 ||
        feld37 == team1 && feld38 == team1 && feld39 == team1 && feld40 == team1 ||
        feld38 == team1 && feld39 == team1 && feld40 == team1 && feld41 == team1 ||
        feld39 == team1 && fedl40 == team1 && feld41 == team1 && feld42 == team1 ||
        // 7. Reihe
        feld43 == team1 && feld44 == team1 && feld45 == team1 && feld46 == team1 ||
        feld44 == team1 && feld45 == team1 && feld46 == team1 && feld47 == team1 ||
        feld45 == team1 && feld46 == team1 && feld47 == team1 && feld48 == team1 ||
        feld46 == team1 && feld47 == team1 && feld48 == team1 && feld48 == team1 ||
        //8. Reihe
        feld49 == team1 && feld50 == team1 && feld51 == team1 && feld52 == team1 ||
        feld50 == team1 && feld51 == team1 && feld52 == team1 && feld53 == team1 ||
        feld51 == team1 && feld52 == team1 && feld53 == team1 && feld54 == team1 ||
        feld52 == team1 && feld53 == team1 && feld54 == team1 && feld55 == team1 ||
        feld53 == team1 && feld54 == team1 && feld55 == team1 && feld56 == team1 ||
        //1. Spalte
        feld1 == team1 && feld8 == team1 && feld15 == team1 && feld22 == team1 ||
        feld8 == team1 && feld15 == team1 && feld22 == team1 && feld29 == team1 ||
        feld15 == team1 && feld22 == team1 && feld29 == team1 && feld36 == team1 ||
        feld22 == team1 && feld29 == team1 && feld36 == team1 && feld43 == team1 ||
        feld29 == team1 && feld36 == team1 && feld43 == team1 && feld50 == team1 ||
        //2. Spalte
        feld2 == team1 && feld9 == team1 && feld16 == team1 && feld23 == team1 ||
        feld9 == team1 && feld16 == team1 && feld23 == team1 && feld30 == team1 ||
        feld16 == team1 && feld23 == team1 && feld30 == team1 && feld37 == team1 ||
        feld23 == team1 && feld30 == team1 && feld37 == team1 && feld44 == team1 ||
        feld30 == team1 && feld37 == team1 && feld44 == team1 && feld51 == team1 ||
        //3. Spalte
        feld3 == team1 && feld10 == team1 && feld17 == team1 && feld24 == team1 ||
        feld10 == team1 && feld17 == team1 && feld24 == team1 && feld31 == team1 ||
        feld17 == team1 && feld24 == team1 && feld31 == team1 && feld38 == team1 ||
        feld24 == team1 && feld31 == team1 && feld38 == team1 && feld45 == team1 ||
        feld31 == team1 && feld38 == team1 && feld45 == team1 && feld52 == team1 ||
        //4. Spalte
        feld4 == team1 && feld11 == team1 && feld18 == team1 && feld25 == team1 ||
        feld11 == team1 && feld18 == team1 && feld25 == team1 && feld32 == team1 ||
        feld18 == team1 && feld25 == team1 && feld32 == team1 && feld39 == team1 ||
        feld25 == team1 && feld32 == team1 && feld39 == team1 && feld46 == team1 ||
        feld32 == team1 && feld39 == team1 && feld46 == team1 && feld53 == team1 ||
        //5. Spalte
        feld5 == team1 && feld12 == team1 && feld19 == team1 && feld26 == team1 ||
        feld12 == team1 && feld19 == team1 && feld26 == team1 && feld33 == team1 ||
        feld19 == team1 && feld26 == team1 && feld33 == team1 && feld40 == team1 ||
        feld26 == team1 && feld33 == team1 && feld40 == team1 && feld47 == team1 ||
        feld33 == team1 && feld40 == team1 && feld47 == team1 && feld54 == team1 ||
        //6. Spalte
        feld6 == team1 && feld13 == team1 && feld20 == team1 && feld27 == team1 ||
        feld13 == team1 && feld20 == team1 && feld27 == team1 && feld34 == team1 ||
        feld20 == team1 && feld27 == team1 && feld34 == team1 && feld41 == team1 ||
        feld27 == team1 && feld34 == team1 && feld41 == team1 && feld48 == team1 ||
        feld34 == team1 && feld41 == team1 && feld48 == team1 && feld55 == team1 ||
        //7. Spalte
        feld7 == team1 && feld14 == team1 && feld21 == team1 && feld28 == team1 ||
        feld14 == team1 && feld21 == team1 && feld28 == team1 && feld35 == team1 ||
        feld21 == team1 && feld28 == team1 && feld35 == team1 && feld42 == team1 ||
        feld28 == team1 && feld35 == team1 && feld42 == team1 && feld49 == team1 ||
        feld35 == team1 && feld42 == team1 && feld49 == team1 && feld56 == team1 
    ) {
        alert("Das rote Team hat gewonnen!")
    }
}

function changeTeam() {
    if (teams == 0) {
        teams = 1;
    } else if (teams == 1) {
        teams = 0;
    }
}