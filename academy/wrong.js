/**
 * Created by alex on 11/12/14.
 */
var userChoice = prompt("Do you choose KAMEN, NOGITSI or BUMAGA?");
console.log(userChoice + " user`s choose");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "KAMEN";
} else if(computerChoice <= 0.67) {
    computerChoice = "BUMAGA";
} else {
    computerChoice = "NOGITSI";
} console.log("Computer has: " + computerChoice);
var compare = function(ch1, ch2) {
    if(ch1 === ch2) {
        return "PobediLa DruGba =)";
    }
    if(ch1 === "NOGOTSI") {

        if(ch2 ==="KAMEN") {
            return "KaMen6 WiNs";
        }
        else {
            return "paper wins";
        }
    }
};
coompare(userChoice,computerChoice);