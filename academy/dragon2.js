var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 9 + 1);
var totalDamage = 0;
var dragonHealth = 10;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        dragonHealth -= totalDamage;
        console.log ("The dragon health equal: " + dragonHealth + " !!! ");

        if ( totalDamage >= 10 ) {
            console.log("You did it! You slew the dragon!!!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);

        }
         if (youHit) {
            console.log("You dodged and have a chance to hit again!!!");
        }
        else {
             console.log ("Dragon riposte and made FATALITY :( You lose!!!");
         }
    } else {
        console.log("The dragon burninates you! You're toast.");
        slaying = false;
    }
}