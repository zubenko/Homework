var userChoice = prompt("Do you choose KAMEN, NOGITSI or BUMAGA?");
alert(userChoice + " user`s choose");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "KAMEN";
} else if (computerChoice <= 0.67) {
    computerChoice = "BUMAGA";
} else {
    computerChoice = "NOGITSI";
}
alert("Computer has: " + computerChoice);

var compare = function (choos1, choos2) {
    if (choos1 === choos2) {
        return "PobediLa DruGba =)";
    }
    if (choos1 === "NOGITSI") {

        if (choos2 === "KAMEN") {
            return "KaMen6 WiNs";
        }
        else if (choos2 === "BUMAGA") {
            return "NOGITSI wins";

        }
    }
    if (choos1 === "KAMEN") {
        if (choos2 === "NOGITSI") {
            return "KaMen6 Wins";
        }
        else if (choos2 === "BUMAGA") {
            return "BUmaGA wins";

        }
    }
    else {
        return "Bumaga Wins";
    }
};
alert("WINNER " + compare(userChoice, computerChoice));